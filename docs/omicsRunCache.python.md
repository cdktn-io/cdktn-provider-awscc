# `omicsRunCache` Submodule <a name="`omicsRunCache` Submodule" id="@cdktn/provider-awscc.omicsRunCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsRunCache <a name="OmicsRunCache" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache awscc_omics_run_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCache(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cache_behavior: str = None,
  cache_bucket_owner_id: str = None,
  cache_s3_location: str = None,
  description: str = None,
  name: str = None,
  tags: IResolvable | typing.List[OmicsRunCacheTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.cacheBehavior">cache_behavior</a></code> | <code>str</code> | The default cache behavior for runs using this cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.cacheBucketOwnerId">cache_bucket_owner_id</a></code> | <code>str</code> | The AWS account ID of the expected owner of the S3 bucket for the run cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.cacheS3Location">cache_s3_location</a></code> | <code>str</code> | The S3 location for storing the cached task outputs. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the run cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the run cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]</code> | Tags for the run cache. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_behavior`<sup>Optional</sup> <a name="cache_behavior" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.cacheBehavior"></a>

- *Type:* str

The default cache behavior for runs using this cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#cache_behavior OmicsRunCache#cache_behavior}

---

##### `cache_bucket_owner_id`<sup>Optional</sup> <a name="cache_bucket_owner_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.cacheBucketOwnerId"></a>

- *Type:* str

The AWS account ID of the expected owner of the S3 bucket for the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#cache_bucket_owner_id OmicsRunCache#cache_bucket_owner_id}

---

##### `cache_s3_location`<sup>Optional</sup> <a name="cache_s3_location" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.cacheS3Location"></a>

- *Type:* str

The S3 location for storing the cached task outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#cache_s3_location OmicsRunCache#cache_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.description"></a>

- *Type:* str

A description of the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#description OmicsRunCache#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.name"></a>

- *Type:* str

A name for the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#name OmicsRunCache#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]

Tags for the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#tags OmicsRunCache#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetCacheBehavior">reset_cache_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetCacheBucketOwnerId">reset_cache_bucket_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetCacheS3Location">reset_cache_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OmicsRunCacheTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]

---

##### `reset_cache_behavior` <a name="reset_cache_behavior" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetCacheBehavior"></a>

```python
def reset_cache_behavior() -> None
```

##### `reset_cache_bucket_owner_id` <a name="reset_cache_bucket_owner_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetCacheBucketOwnerId"></a>

```python
def reset_cache_bucket_owner_id() -> None
```

##### `reset_cache_s3_location` <a name="reset_cache_s3_location" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetCacheS3Location"></a>

```python
def reset_cache_s3_location() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OmicsRunCache resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isConstruct"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCache.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isTerraformElement"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCache.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isTerraformResource"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCache.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCache.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OmicsRunCache resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OmicsRunCache to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OmicsRunCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsRunCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.runCacheId">run_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList">OmicsRunCacheTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBehaviorInput">cache_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBucketOwnerIdInput">cache_bucket_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheS3LocationInput">cache_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBehavior">cache_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBucketOwnerId">cache_bucket_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheS3Location">cache_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `run_cache_id`<sup>Required</sup> <a name="run_cache_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.runCacheId"></a>

```python
run_cache_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.tags"></a>

```python
tags: OmicsRunCacheTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList">OmicsRunCacheTagsList</a>

---

##### `cache_behavior_input`<sup>Optional</sup> <a name="cache_behavior_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBehaviorInput"></a>

```python
cache_behavior_input: str
```

- *Type:* str

---

##### `cache_bucket_owner_id_input`<sup>Optional</sup> <a name="cache_bucket_owner_id_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBucketOwnerIdInput"></a>

```python
cache_bucket_owner_id_input: str
```

- *Type:* str

---

##### `cache_s3_location_input`<sup>Optional</sup> <a name="cache_s3_location_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheS3LocationInput"></a>

```python
cache_s3_location_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OmicsRunCacheTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]

---

##### `cache_behavior`<sup>Required</sup> <a name="cache_behavior" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBehavior"></a>

```python
cache_behavior: str
```

- *Type:* str

---

##### `cache_bucket_owner_id`<sup>Required</sup> <a name="cache_bucket_owner_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheBucketOwnerId"></a>

```python
cache_bucket_owner_id: str
```

- *Type:* str

---

##### `cache_s3_location`<sup>Required</sup> <a name="cache_s3_location" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.cacheS3Location"></a>

```python
cache_s3_location: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCache.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsRunCacheConfig <a name="OmicsRunCacheConfig" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCacheConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cache_behavior: str = None,
  cache_bucket_owner_id: str = None,
  cache_s3_location: str = None,
  description: str = None,
  name: str = None,
  tags: IResolvable | typing.List[OmicsRunCacheTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.cacheBehavior">cache_behavior</a></code> | <code>str</code> | The default cache behavior for runs using this cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.cacheBucketOwnerId">cache_bucket_owner_id</a></code> | <code>str</code> | The AWS account ID of the expected owner of the S3 bucket for the run cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.cacheS3Location">cache_s3_location</a></code> | <code>str</code> | The S3 location for storing the cached task outputs. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.description">description</a></code> | <code>str</code> | A description of the run cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.name">name</a></code> | <code>str</code> | A name for the run cache. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]</code> | Tags for the run cache. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_behavior`<sup>Optional</sup> <a name="cache_behavior" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.cacheBehavior"></a>

```python
cache_behavior: str
```

- *Type:* str

The default cache behavior for runs using this cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#cache_behavior OmicsRunCache#cache_behavior}

---

##### `cache_bucket_owner_id`<sup>Optional</sup> <a name="cache_bucket_owner_id" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.cacheBucketOwnerId"></a>

```python
cache_bucket_owner_id: str
```

- *Type:* str

The AWS account ID of the expected owner of the S3 bucket for the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#cache_bucket_owner_id OmicsRunCache#cache_bucket_owner_id}

---

##### `cache_s3_location`<sup>Optional</sup> <a name="cache_s3_location" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.cacheS3Location"></a>

```python
cache_s3_location: str
```

- *Type:* str

The S3 location for storing the cached task outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#cache_s3_location OmicsRunCache#cache_s3_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#description OmicsRunCache#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#name OmicsRunCache#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OmicsRunCacheTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]

Tags for the run cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#tags OmicsRunCache#tags}

---

### OmicsRunCacheTags <a name="OmicsRunCacheTags" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags.Initializer"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCacheTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#key OmicsRunCache#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_run_cache#value OmicsRunCache#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsRunCacheTagsList <a name="OmicsRunCacheTagsList" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCacheTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OmicsRunCacheTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OmicsRunCacheTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>]

---


### OmicsRunCacheTagsOutputReference <a name="OmicsRunCacheTagsOutputReference" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_run_cache

omicsRunCache.OmicsRunCacheTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsRunCacheTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsRunCache.OmicsRunCacheTags">OmicsRunCacheTags</a>

---



