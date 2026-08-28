# `s3OutpostsBucket` Submodule <a name="`s3OutpostsBucket` Submodule" id="@cdktn/provider-awscc.s3OutpostsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3OutpostsBucket <a name="S3OutpostsBucket" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket awscc_s3outposts_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucket(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket_name: str,
  outpost_id: str,
  lifecycle_configuration: S3OutpostsBucketLifecycleConfiguration = None,
  tags: IResolvable | typing.List[S3OutpostsBucketTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | A name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.outpostId">outpost_id</a></code> | <code>str</code> | The id of the customer outpost on which the bucket resides. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | Rules that define how Amazon S3Outposts manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this S3Outposts bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.bucketName"></a>

- *Type:* str

A name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#bucket_name S3OutpostsBucket#bucket_name}

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.outpostId"></a>

- *Type:* str

The id of the customer outpost on which the bucket resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#outpost_id S3OutpostsBucket#outpost_id}

---

##### `lifecycle_configuration`<sup>Optional</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

Rules that define how Amazon S3Outposts manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#lifecycle_configuration S3OutpostsBucket#lifecycle_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]

An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration">put_lifecycle_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetLifecycleConfiguration">reset_lifecycle_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lifecycle_configuration` <a name="put_lifecycle_configuration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration"></a>

```python
def put_lifecycle_configuration(
  rules: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRules] = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]

A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#rules S3OutpostsBucket#rules}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3OutpostsBucketTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]

---

##### `reset_lifecycle_configuration` <a name="reset_lifecycle_configuration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetLifecycleConfiguration"></a>

```python
def reset_lifecycle_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3OutpostsBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3OutpostsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3OutpostsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference">S3OutpostsBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList">S3OutpostsBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfigurationInput">lifecycle_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostIdInput">outpost_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostId">outpost_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_configuration`<sup>Required</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: S3OutpostsBucketLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference">S3OutpostsBucketLifecycleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tags"></a>

```python
tags: S3OutpostsBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList">S3OutpostsBucketTagsList</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `lifecycle_configuration_input`<sup>Optional</sup> <a name="lifecycle_configuration_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfigurationInput"></a>

```python
lifecycle_configuration_input: IResolvable | S3OutpostsBucketLifecycleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---

##### `outpost_id_input`<sup>Optional</sup> <a name="outpost_id_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostIdInput"></a>

```python
outpost_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3OutpostsBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3OutpostsBucketConfig <a name="S3OutpostsBucketConfig" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket_name: str,
  outpost_id: str,
  lifecycle_configuration: S3OutpostsBucketLifecycleConfiguration = None,
  tags: IResolvable | typing.List[S3OutpostsBucketTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | A name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.outpostId">outpost_id</a></code> | <code>str</code> | The id of the customer outpost on which the bucket resides. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | Rules that define how Amazon S3Outposts manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this S3Outposts bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

A name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#bucket_name S3OutpostsBucket#bucket_name}

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

The id of the customer outpost on which the bucket resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#outpost_id S3OutpostsBucket#outpost_id}

---

##### `lifecycle_configuration`<sup>Optional</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: S3OutpostsBucketLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

Rules that define how Amazon S3Outposts manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#lifecycle_configuration S3OutpostsBucket#lifecycle_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3OutpostsBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]

An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

### S3OutpostsBucketLifecycleConfiguration <a name="S3OutpostsBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration(
  rules: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]</code> | A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.property.rules"></a>

```python
rules: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]

A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#rules S3OutpostsBucket#rules}

---

### S3OutpostsBucketLifecycleConfigurationRules <a name="S3OutpostsBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules(
  abort_incomplete_multipart_upload: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload = None,
  expiration_date: str = None,
  expiration_in_days: typing.Union[int, float] = None,
  filter: S3OutpostsBucketLifecycleConfigurationRulesFilter = None,
  id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationDate">expiration_date</a></code> | <code>str</code> | Indicates when objects are deleted from Amazon S3Outposts. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | Indicates the number of days after creation when objects are deleted from Amazon S3Outposts. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | The container for the filter of the lifecycle rule. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.id">id</a></code> | <code>str</code> | Unique identifier for the lifecycle rule. The value can't be longer than 255 characters. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}. |

---

##### `abort_incomplete_multipart_upload`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#abort_incomplete_multipart_upload S3OutpostsBucket#abort_incomplete_multipart_upload}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

Indicates when objects are deleted from Amazon S3Outposts.

The date value must be in ISO 8601 format. The time is always midnight UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#expiration_date S3OutpostsBucket#expiration_date}

---

##### `expiration_in_days`<sup>Optional</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#expiration_in_days S3OutpostsBucket#expiration_in_days}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.filter"></a>

```python
filter: S3OutpostsBucketLifecycleConfigurationRulesFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

The container for the filter of the lifecycle rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#filter S3OutpostsBucket#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.id"></a>

```python
id: str
```

- *Type:* str

Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#id S3OutpostsBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}.

---

### S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload(
  days_after_initiation: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload. |

---

##### `days_after_initiation`<sup>Optional</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#days_after_initiation S3OutpostsBucket#days_after_initiation}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilter <a name="S3OutpostsBucketLifecycleConfigurationRulesFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter(
  and_operator: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator = None,
  prefix: str = None,
  tag: S3OutpostsBucketLifecycleConfigurationRulesFilterTag = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.andOperator">and_operator</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | The container for the AND condition for the lifecycle rule. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.prefix">prefix</a></code> | <code>str</code> | Object key prefix that identifies one or more objects to which this rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket. |

---

##### `and_operator`<sup>Optional</sup> <a name="and_operator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.andOperator"></a>

```python
and_operator: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

The container for the AND condition for the lifecycle rule.

A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#and_operator S3OutpostsBucket#and_operator}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Object key prefix that identifies one or more objects to which this rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.tag"></a>

```python
tag: S3OutpostsBucketLifecycleConfigurationRulesFilterTag
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tag S3OutpostsBucket#tag}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator(
  prefix: str = None,
  tags: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.prefix">prefix</a></code> | <code>str</code> | Prefix identifies one or more objects to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]</code> | All of these tags must exist in the object's tag set in order for the rule to apply. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Prefix identifies one or more objects to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.tags"></a>

```python
tags: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]

All of these tags must exist in the object's tag set in order for the rule to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterTag <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

### S3OutpostsBucketTags <a name="S3OutpostsBucketTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3OutpostsBucketLifecycleConfigurationOutputReference <a name="S3OutpostsBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]

---

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList">S3OutpostsBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rules"></a>

```python
rules: S3OutpostsBucketLifecycleConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList">S3OutpostsBucketLifecycleConfigurationRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">reset_days_after_initiation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_after_initiation` <a name="reset_days_after_initiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```python
def reset_days_after_initiation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">days_after_initiation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_initiation_input`<sup>Optional</sup> <a name="days_after_initiation_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```python
days_after_initiation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]

---

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags"></a>

```python
tags: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator">put_and_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetAndOperator">reset_and_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and_operator` <a name="put_and_operator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator"></a>

```python
def put_and_operator(
  prefix: str = None,
  tags: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags] = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator.parameter.prefix"></a>

- *Type:* str

Prefix identifies one or more objects to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>]

All of these tags must exist in the object's tag set in order for the rule to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

##### `put_tag` <a name="put_tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag"></a>

```python
def put_tag(
  key: str = None,
  value: str = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

##### `reset_and_operator` <a name="reset_and_operator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetAndOperator"></a>

```python
def reset_and_operator() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator">and_operator</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperatorInput">and_operator_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tagInput">tag_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and_operator`<sup>Required</sup> <a name="and_operator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator"></a>

```python
and_operator: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag"></a>

```python
tag: S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a>

---

##### `and_operator_input`<sup>Optional</sup> <a name="and_operator_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperatorInput"></a>

```python
and_operator_input: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tagInput"></a>

```python
tag_input: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesList <a name="S3OutpostsBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3OutpostsBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3OutpostsBucketLifecycleConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>]

---


### S3OutpostsBucketLifecycleConfigurationRulesOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">put_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">reset_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationDate">reset_expiration_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">reset_expiration_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort_incomplete_multipart_upload` <a name="put_abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```python
def put_abort_incomplete_multipart_upload(
  days_after_initiation: typing.Union[int, float] = None
) -> None
```

###### `days_after_initiation`<sup>Optional</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.daysAfterInitiation"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#days_after_initiation S3OutpostsBucket#days_after_initiation}

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter"></a>

```python
def put_filter(
  and_operator: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator = None,
  prefix: str = None,
  tag: S3OutpostsBucketLifecycleConfigurationRulesFilterTag = None
) -> None
```

###### `and_operator`<sup>Optional</sup> <a name="and_operator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter.parameter.andOperator"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

The container for the AND condition for the lifecycle rule.

A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#and_operator S3OutpostsBucket#and_operator}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter.parameter.prefix"></a>

- *Type:* str

Object key prefix that identifies one or more objects to which this rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter.parameter.tag"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3outposts_bucket#tag S3OutpostsBucket#tag}

---

##### `reset_abort_incomplete_multipart_upload` <a name="reset_abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```python
def reset_abort_incomplete_multipart_upload() -> None
```

##### `reset_expiration_date` <a name="reset_expiration_date" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationDate"></a>

```python
def reset_expiration_date() -> None
```

##### `reset_expiration_in_days` <a name="reset_expiration_in_days" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```python
def reset_expiration_in_days() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">abort_incomplete_multipart_upload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">expiration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload`<sup>Required</sup> <a name="abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter"></a>

```python
filter: S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a>

---

##### `abort_incomplete_multipart_upload_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```python
abort_incomplete_multipart_upload_input: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `expiration_in_days_input`<sup>Optional</sup> <a name="expiration_in_days_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```python
expiration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `expiration_in_days`<sup>Required</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketLifecycleConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>

---


### S3OutpostsBucketTagsList <a name="S3OutpostsBucketTagsList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3OutpostsBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3OutpostsBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>]

---


### S3OutpostsBucketTagsOutputReference <a name="S3OutpostsBucketTagsOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_outposts_bucket

s3OutpostsBucket.S3OutpostsBucketTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3OutpostsBucketTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>

---



