# `datasyncLocationS3` Submodule <a name="`datasyncLocationS3` Submodule" id="@cdktn/provider-awscc.datasyncLocationS3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationS3 <a name="DatasyncLocationS3" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3 awscc_datasync_location_s3}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  s3_config: DatasyncLocationS3S3Config,
  s3_bucket_arn: str = None,
  s3_storage_class: str = None,
  subdirectory: str = None,
  tags: IResolvable | typing.List[DatasyncLocationS3Tags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3StorageClass">s3_storage_class</a></code> | <code>str</code> | The Amazon S3 storage class you want to store your files in when this location is used as a task destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>str</code> | A subdirectory in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3Config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#s3_config DatasyncLocationS3#s3_config}

---

##### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3BucketArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}

---

##### `s3_storage_class`<sup>Optional</sup> <a name="s3_storage_class" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3StorageClass"></a>

- *Type:* str

The Amazon S3 storage class you want to store your files in when this location is used as a task destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.subdirectory"></a>

- *Type:* str

A subdirectory in the Amazon S3 bucket.

This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.putS3Config">put_s3_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetS3BucketArn">reset_s3_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetS3StorageClass">reset_s3_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetSubdirectory">reset_subdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_s3_config` <a name="put_s3_config" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.putS3Config"></a>

```python
def put_s3_config(
  bucket_access_role_arn: str
) -> None
```

###### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.putS3Config.parameter.bucketAccessRoleArn"></a>

- *Type:* str

The ARN of the IAM role of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatasyncLocationS3Tags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]

---

##### `reset_s3_bucket_arn` <a name="reset_s3_bucket_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetS3BucketArn"></a>

```python
def reset_s3_bucket_arn() -> None
```

##### `reset_s3_storage_class` <a name="reset_s3_storage_class" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetS3StorageClass"></a>

```python
def reset_s3_storage_class() -> None
```

##### `reset_subdirectory` <a name="reset_subdirectory" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetSubdirectory"></a>

```python
def reset_subdirectory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatasyncLocationS3 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isConstruct"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatasyncLocationS3 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasyncLocationS3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasyncLocationS3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationS3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference">DatasyncLocationS3S3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList">DatasyncLocationS3TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArnInput">s3_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3ConfigInput">s3_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClassInput">s3_storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClass">s3_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3Config"></a>

```python
s3_config: DatasyncLocationS3S3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference">DatasyncLocationS3S3ConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.tags"></a>

```python
tags: DatasyncLocationS3TagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList">DatasyncLocationS3TagsList</a>

---

##### `s3_bucket_arn_input`<sup>Optional</sup> <a name="s3_bucket_arn_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArnInput"></a>

```python
s3_bucket_arn_input: str
```

- *Type:* str

---

##### `s3_config_input`<sup>Optional</sup> <a name="s3_config_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3ConfigInput"></a>

```python
s3_config_input: IResolvable | DatasyncLocationS3S3Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---

##### `s3_storage_class_input`<sup>Optional</sup> <a name="s3_storage_class_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClassInput"></a>

```python
s3_storage_class_input: str
```

- *Type:* str

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatasyncLocationS3Tags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `s3_storage_class`<sup>Required</sup> <a name="s3_storage_class" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClass"></a>

```python
s3_storage_class: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationS3Config <a name="DatasyncLocationS3Config" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  s3_config: DatasyncLocationS3S3Config,
  s3_bucket_arn: str = None,
  s3_storage_class: str = None,
  subdirectory: str = None,
  tags: IResolvable | typing.List[DatasyncLocationS3Tags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.s3StorageClass">s3_storage_class</a></code> | <code>str</code> | The Amazon S3 storage class you want to store your files in when this location is used as a task destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.subdirectory">subdirectory</a></code> | <code>str</code> | A subdirectory in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.s3Config"></a>

```python
s3_config: DatasyncLocationS3S3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#s3_config DatasyncLocationS3#s3_config}

---

##### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}

---

##### `s3_storage_class`<sup>Optional</sup> <a name="s3_storage_class" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.s3StorageClass"></a>

```python
s3_storage_class: str
```

- *Type:* str

The Amazon S3 storage class you want to store your files in when this location is used as a task destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

A subdirectory in the Amazon S3 bucket.

This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Config.property.tags"></a>

```python
tags: IResolvable | typing.List[DatasyncLocationS3Tags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}

---

### DatasyncLocationS3S3Config <a name="DatasyncLocationS3S3Config" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3S3Config(
  bucket_access_role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | The ARN of the IAM role of the Amazon S3 bucket. |

---

##### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

The ARN of the IAM role of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}

---

### DatasyncLocationS3Tags <a name="DatasyncLocationS3Tags" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3Tags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags.property.key">key</a></code> | <code>str</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags.property.value">value</a></code> | <code>str</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#key DatasyncLocationS3#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_s3#value DatasyncLocationS3#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationS3S3ConfigOutputReference <a name="DatasyncLocationS3S3ConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArnInput">bucket_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_access_role_arn_input`<sup>Optional</sup> <a name="bucket_access_role_arn_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArnInput"></a>

```python
bucket_access_role_arn_input: str
```

- *Type:* str

---

##### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationS3S3Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---


### DatasyncLocationS3TagsList <a name="DatasyncLocationS3TagsList" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncLocationS3TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncLocationS3Tags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>]

---


### DatasyncLocationS3TagsOutputReference <a name="DatasyncLocationS3TagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_s3

datasyncLocationS3.DatasyncLocationS3TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3TagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationS3Tags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationS3.DatasyncLocationS3Tags">DatasyncLocationS3Tags</a>

---



