# `s3StorageLens` Submodule <a name="`s3StorageLens` Submodule" id="@cdktn/provider-awscc.s3StorageLens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3StorageLens <a name="S3StorageLens" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens awscc_s3_storage_lens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLens(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_lens_configuration: S3StorageLensStorageLensConfiguration,
  tags: IResolvable | typing.List[S3StorageLensTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.storageLensConfiguration">storage_lens_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | Specifies the details of Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]</code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_lens_configuration`<sup>Required</sup> <a name="storage_lens_configuration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.storageLensConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

Specifies the details of Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_configuration S3StorageLens#storage_lens_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]

A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#tags S3StorageLens#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration">put_storage_lens_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_storage_lens_configuration` <a name="put_storage_lens_configuration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration"></a>

```python
def put_storage_lens_configuration(
  account_level: S3StorageLensStorageLensConfigurationAccountLevel,
  id: str,
  is_enabled: bool | IResolvable,
  aws_org: S3StorageLensStorageLensConfigurationAwsOrg = None,
  data_export: S3StorageLensStorageLensConfigurationDataExport = None,
  exclude: S3StorageLensStorageLensConfigurationExclude = None,
  expanded_prefixes_data_export: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport = None,
  include: S3StorageLensStorageLensConfigurationInclude = None,
  prefix_delimiter: str = None
) -> None
```

###### `account_level`<sup>Required</sup> <a name="account_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.accountLevel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

Account-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#account_level S3StorageLens#account_level}

---

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.id"></a>

- *Type:* str

The ID that identifies the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#id S3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

###### `aws_org`<sup>Optional</sup> <a name="aws_org" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.awsOrg"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#aws_org S3StorageLens#aws_org}

---

###### `data_export`<sup>Optional</sup> <a name="data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.dataExport"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

Specifies how Amazon S3 Storage Lens metrics should be exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#data_export S3StorageLens#data_export}

---

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.exclude"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}

---

###### `expanded_prefixes_data_export`<sup>Optional</sup> <a name="expanded_prefixes_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.expandedPrefixesDataExport"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

Expanded Prefixes Data Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#expanded_prefixes_data_export S3StorageLens#expanded_prefixes_data_export}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.include"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#include S3StorageLens#include}

---

###### `prefix_delimiter`<sup>Optional</sup> <a name="prefix_delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.prefixDelimiter"></a>

- *Type:* str

The delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix_delimiter S3StorageLens#prefix_delimiter}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3StorageLensTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLens.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLens.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLens.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLens.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3StorageLens to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3StorageLens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3StorageLens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfiguration">storage_lens_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference">S3StorageLensStorageLensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList">S3StorageLensTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfigurationInput">storage_lens_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_lens_configuration`<sup>Required</sup> <a name="storage_lens_configuration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfiguration"></a>

```python
storage_lens_configuration: S3StorageLensStorageLensConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference">S3StorageLensStorageLensConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tags"></a>

```python
tags: S3StorageLensTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList">S3StorageLensTagsList</a>

---

##### `storage_lens_configuration_input`<sup>Optional</sup> <a name="storage_lens_configuration_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfigurationInput"></a>

```python
storage_lens_configuration_input: IResolvable | S3StorageLensStorageLensConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3StorageLensTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3StorageLensConfig <a name="S3StorageLensConfig" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_lens_configuration: S3StorageLensStorageLensConfiguration,
  tags: IResolvable | typing.List[S3StorageLensTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.storageLensConfiguration">storage_lens_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | Specifies the details of Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]</code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_lens_configuration`<sup>Required</sup> <a name="storage_lens_configuration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.storageLensConfiguration"></a>

```python
storage_lens_configuration: S3StorageLensStorageLensConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

Specifies the details of Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_configuration S3StorageLens#storage_lens_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3StorageLensTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]

A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#tags S3StorageLens#tags}

---

### S3StorageLensStorageLensConfiguration <a name="S3StorageLensStorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfiguration(
  account_level: S3StorageLensStorageLensConfigurationAccountLevel,
  id: str,
  is_enabled: bool | IResolvable,
  aws_org: S3StorageLensStorageLensConfigurationAwsOrg = None,
  data_export: S3StorageLensStorageLensConfigurationDataExport = None,
  exclude: S3StorageLensStorageLensConfigurationExclude = None,
  expanded_prefixes_data_export: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport = None,
  include: S3StorageLensStorageLensConfigurationInclude = None,
  prefix_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.accountLevel">account_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | Account-level metrics configurations. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.id">id</a></code> | <code>str</code> | The ID that identifies the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.awsOrg">aws_org</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.dataExport">data_export</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | Specifies how Amazon S3 Storage Lens metrics should be exported. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.expandedPrefixesDataExport">expanded_prefixes_data_export</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | Expanded Prefixes Data Export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.include">include</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.prefixDelimiter">prefix_delimiter</a></code> | <code>str</code> | The delimiter to divide S3 key into hierarchy of prefixes. |

---

##### `account_level`<sup>Required</sup> <a name="account_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.accountLevel"></a>

```python
account_level: S3StorageLensStorageLensConfigurationAccountLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

Account-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#account_level S3StorageLens#account_level}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

The ID that identifies the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#id S3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `aws_org`<sup>Optional</sup> <a name="aws_org" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.awsOrg"></a>

```python
aws_org: S3StorageLensStorageLensConfigurationAwsOrg
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#aws_org S3StorageLens#aws_org}

---

##### `data_export`<sup>Optional</sup> <a name="data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.dataExport"></a>

```python
data_export: S3StorageLensStorageLensConfigurationDataExport
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

Specifies how Amazon S3 Storage Lens metrics should be exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#data_export S3StorageLens#data_export}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.exclude"></a>

```python
exclude: S3StorageLensStorageLensConfigurationExclude
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}

---

##### `expanded_prefixes_data_export`<sup>Optional</sup> <a name="expanded_prefixes_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.expandedPrefixesDataExport"></a>

```python
expanded_prefixes_data_export: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

Expanded Prefixes Data Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#expanded_prefixes_data_export S3StorageLens#expanded_prefixes_data_export}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.include"></a>

```python
include: S3StorageLensStorageLensConfigurationInclude
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#include S3StorageLens#include}

---

##### `prefix_delimiter`<sup>Optional</sup> <a name="prefix_delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.prefixDelimiter"></a>

```python
prefix_delimiter: str
```

- *Type:* str

The delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix_delimiter S3StorageLens#prefix_delimiter}

---

### S3StorageLensStorageLensConfigurationAccountLevel <a name="S3StorageLensStorageLensConfigurationAccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel(
  bucket_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel,
  activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics = None,
  advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics = None,
  advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics = None,
  advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics = None,
  detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics = None,
  storage_lens_group_level: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.bucketLevel">bucket_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | Bucket-level metrics configurations. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.activityMetrics">activity_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | Enables activity metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedCostOptimizationMetrics">advanced_cost_optimization_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | Enables advanced cost optimization metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedDataProtectionMetrics">advanced_data_protection_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | Enables advanced data protection metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedPerformanceMetrics">advanced_performance_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | Advanced Performance Metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.detailedStatusCodesMetrics">detailed_status_codes_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | Enables detailed status codes metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.storageLensGroupLevel">storage_lens_group_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | Specifies the details of Amazon S3 Storage Lens Group configuration. |

---

##### `bucket_level`<sup>Required</sup> <a name="bucket_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.bucketLevel"></a>

```python
bucket_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

Bucket-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#bucket_level S3StorageLens#bucket_level}

---

##### `activity_metrics`<sup>Optional</sup> <a name="activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.activityMetrics"></a>

```python
activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

##### `advanced_cost_optimization_metrics`<sup>Optional</sup> <a name="advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedCostOptimizationMetrics"></a>

```python
advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

##### `advanced_data_protection_metrics`<sup>Optional</sup> <a name="advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedDataProtectionMetrics"></a>

```python
advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

##### `advanced_performance_metrics`<sup>Optional</sup> <a name="advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedPerformanceMetrics"></a>

```python
advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

##### `detailed_status_codes_metrics`<sup>Optional</sup> <a name="detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.detailedStatusCodesMetrics"></a>

```python
detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

##### `storage_lens_group_level`<sup>Optional</sup> <a name="storage_lens_group_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.storageLensGroupLevel"></a>

```python
storage_lens_group_level: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

Specifies the details of Amazon S3 Storage Lens Group configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_group_level S3StorageLens#storage_lens_group_level}

---

### S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether activity metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether advanced cost optimization metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether advanced data protection metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the Advanced Performance Metrics is enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel(
  activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics = None,
  advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics = None,
  advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics = None,
  advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics = None,
  detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics = None,
  prefix_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics">activity_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | Enables activity metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedCostOptimizationMetrics">advanced_cost_optimization_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | Enables advanced cost optimization metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedDataProtectionMetrics">advanced_data_protection_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | Enables advanced data protection metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedPerformanceMetrics">advanced_performance_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | Advanced Performance Metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.detailedStatusCodesMetrics">detailed_status_codes_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | Enables detailed status codes metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel">prefix_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | Prefix-level metrics configurations. |

---

##### `activity_metrics`<sup>Optional</sup> <a name="activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics"></a>

```python
activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

##### `advanced_cost_optimization_metrics`<sup>Optional</sup> <a name="advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedCostOptimizationMetrics"></a>

```python
advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

##### `advanced_data_protection_metrics`<sup>Optional</sup> <a name="advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedDataProtectionMetrics"></a>

```python
advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

##### `advanced_performance_metrics`<sup>Optional</sup> <a name="advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedPerformanceMetrics"></a>

```python
advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

##### `detailed_status_codes_metrics`<sup>Optional</sup> <a name="detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.detailedStatusCodesMetrics"></a>

```python
detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

##### `prefix_level`<sup>Optional</sup> <a name="prefix_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel"></a>

```python
prefix_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

Prefix-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix_level S3StorageLens#prefix_level}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether activity metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether advanced cost optimization metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether advanced data protection metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the Advanced Performance Metrics is enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether detailed status codes metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel(
  storage_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics">storage_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}. |

---

##### `storage_metrics`<sup>Optional</sup> <a name="storage_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics"></a>

```python
storage_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}.

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics(
  is_enabled: bool | IResolvable = None,
  selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether prefix-level storage metrics are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria">selection_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | Selection criteria for prefix-level metrics. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether prefix-level storage metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `selection_criteria`<sup>Optional</sup> <a name="selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria"></a>

```python
selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

Selection criteria for prefix-level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#selection_criteria S3StorageLens#selection_criteria}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria(
  delimiter: str = None,
  max_depth: typing.Union[int, float] = None,
  min_storage_bytes_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter">delimiter</a></code> | <code>str</code> | Delimiter to divide S3 key into hierarchy of prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth">max_depth</a></code> | <code>typing.Union[int, float]</code> | Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage">min_storage_bytes_percentage</a></code> | <code>typing.Union[int, float]</code> | The minimum storage bytes threshold for the prefixes to be included in the analysis. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#delimiter S3StorageLens#delimiter}

---

##### `max_depth`<sup>Optional</sup> <a name="max_depth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth"></a>

```python
max_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#max_depth S3StorageLens#max_depth}

---

##### `min_storage_bytes_percentage`<sup>Optional</sup> <a name="min_storage_bytes_percentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage"></a>

```python
min_storage_bytes_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum storage bytes threshold for the prefixes to be included in the analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#min_storage_bytes_percentage S3StorageLens#min_storage_bytes_percentage}

---

### S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether detailed status codes metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel(
  storage_lens_group_selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.property.storageLensGroupSelectionCriteria">storage_lens_group_selection_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | Selection criteria for Storage Lens Group level metrics. |

---

##### `storage_lens_group_selection_criteria`<sup>Optional</sup> <a name="storage_lens_group_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.property.storageLensGroupSelectionCriteria"></a>

```python
storage_lens_group_selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

Selection criteria for Storage Lens Group level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_group_selection_criteria S3StorageLens#storage_lens_group_selection_criteria}

---

### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.include">include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#include S3StorageLens#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#include S3StorageLens#include}.

---

### S3StorageLensStorageLensConfigurationAwsOrg <a name="S3StorageLensStorageLensConfigurationAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.property.arn">arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the specified resource. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.property.arn"></a>

```python
arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

### S3StorageLensStorageLensConfigurationDataExport <a name="S3StorageLensStorageLensConfigurationDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExport(
  cloudwatch_metrics: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics = None,
  s3_bucket_destination: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination = None,
  storage_lens_table_destination: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.cloudwatchMetrics">cloudwatch_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.s3BucketDestination">s3_bucket_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | S3 bucket destination settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.storageLensTableDestination">storage_lens_table_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | S3 Tables destination settings for the Amazon S3 Storage Lens metrics export. |

---

##### `cloudwatch_metrics`<sup>Optional</sup> <a name="cloudwatch_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.cloudwatchMetrics"></a>

```python
cloudwatch_metrics: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#cloudwatch_metrics S3StorageLens#cloudwatch_metrics}

---

##### `s3_bucket_destination`<sup>Optional</sup> <a name="s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.s3BucketDestination"></a>

```python
s3_bucket_destination: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

##### `storage_lens_table_destination`<sup>Optional</sup> <a name="storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.storageLensTableDestination"></a>

```python
storage_lens_table_destination: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

### S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics <a name="S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics(
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether CloudWatch metrics are enabled or disabled. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether CloudWatch metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestination <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination(
  account_id: str = None,
  arn: str = None,
  encryption: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption = None,
  format: str = None,
  output_schema_version: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.accountId">account_id</a></code> | <code>str</code> | The AWS account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.arn">arn</a></code> | <code>str</code> | The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.format">format</a></code> | <code>str</code> | Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion">output_schema_version</a></code> | <code>str</code> | The version of the output schema to use when exporting Amazon S3 Storage Lens metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.prefix">prefix</a></code> | <code>str</code> | The prefix to use for Amazon S3 Storage Lens export. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.format"></a>

```python
format: str
```

- *Type:* str

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

##### `output_schema_version`<sup>Optional</sup> <a name="output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion"></a>

```python
output_schema_version: str
```

- *Type:* str

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption(
  ssekms: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms = None,
  sses3: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3">sses3</a></code> | <code>str</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms(
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId">key_id</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination(
  encryption: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption = None,
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the export to S3 Tables is enabled or disabled. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption(
  ssekms: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms = None,
  sses3: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.sses3">sses3</a></code> | <code>str</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms(
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId">key_id</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationExclude <a name="S3StorageLensStorageLensConfigurationExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExclude(
  buckets: typing.List[str] = None,
  regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.buckets">buckets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}. |

---

##### `buckets`<sup>Optional</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.buckets"></a>

```python
buckets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport(
  s3_bucket_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination = None,
  storage_lens_table_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.s3BucketDestination">s3_bucket_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | S3 bucket destination settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.storageLensTableDestination">storage_lens_table_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | S3 Tables destination settings for the Amazon S3 Storage Lens metrics export. |

---

##### `s3_bucket_destination`<sup>Optional</sup> <a name="s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.s3BucketDestination"></a>

```python
s3_bucket_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

##### `storage_lens_table_destination`<sup>Optional</sup> <a name="storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.storageLensTableDestination"></a>

```python
storage_lens_table_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination(
  account_id: str = None,
  arn: str = None,
  encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption = None,
  format: str = None,
  output_schema_version: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.accountId">account_id</a></code> | <code>str</code> | The AWS account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.arn">arn</a></code> | <code>str</code> | The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.format">format</a></code> | <code>str</code> | Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.outputSchemaVersion">output_schema_version</a></code> | <code>str</code> | The version of the output schema to use when exporting Amazon S3 Storage Lens metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.prefix">prefix</a></code> | <code>str</code> | The prefix to use for Amazon S3 Storage Lens export. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.format"></a>

```python
format: str
```

- *Type:* str

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

##### `output_schema_version`<sup>Optional</sup> <a name="output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.outputSchemaVersion"></a>

```python
output_schema_version: str
```

- *Type:* str

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption(
  ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms = None,
  sses3: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.sses3">sses3</a></code> | <code>str</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms(
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.property.keyId">key_id</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination(
  encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption = None,
  is_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the export to S3 Tables is enabled or disabled. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption(
  ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms = None,
  sses3: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.sses3">sses3</a></code> | <code>str</code> | S3 default server-side encryption. |

---

##### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms(
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId">key_id</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationInclude <a name="S3StorageLensStorageLensConfigurationInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationInclude(
  buckets: typing.List[str] = None,
  regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.buckets">buckets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}. |

---

##### `buckets`<sup>Optional</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.buckets"></a>

```python
buckets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

### S3StorageLensTags <a name="S3StorageLensTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key S3StorageLens#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#value S3StorageLens#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key S3StorageLens#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#value S3StorageLens#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics">put_activity_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics">put_advanced_cost_optimization_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics">put_advanced_data_protection_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics">put_advanced_performance_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics">put_detailed_status_codes_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel">put_prefix_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetActivityMetrics">reset_activity_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedCostOptimizationMetrics">reset_advanced_cost_optimization_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedDataProtectionMetrics">reset_advanced_data_protection_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedPerformanceMetrics">reset_advanced_performance_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetDetailedStatusCodesMetrics">reset_detailed_status_codes_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetPrefixLevel">reset_prefix_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_activity_metrics` <a name="put_activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics"></a>

```python
def put_activity_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_advanced_cost_optimization_metrics` <a name="put_advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics"></a>

```python
def put_advanced_cost_optimization_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_advanced_data_protection_metrics` <a name="put_advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics"></a>

```python
def put_advanced_data_protection_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_advanced_performance_metrics` <a name="put_advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics"></a>

```python
def put_advanced_performance_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_detailed_status_codes_metrics` <a name="put_detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics"></a>

```python
def put_detailed_status_codes_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_prefix_level` <a name="put_prefix_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel"></a>

```python
def put_prefix_level(
  storage_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics = None
) -> None
```

###### `storage_metrics`<sup>Optional</sup> <a name="storage_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel.parameter.storageMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}.

---

##### `reset_activity_metrics` <a name="reset_activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetActivityMetrics"></a>

```python
def reset_activity_metrics() -> None
```

##### `reset_advanced_cost_optimization_metrics` <a name="reset_advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedCostOptimizationMetrics"></a>

```python
def reset_advanced_cost_optimization_metrics() -> None
```

##### `reset_advanced_data_protection_metrics` <a name="reset_advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedDataProtectionMetrics"></a>

```python
def reset_advanced_data_protection_metrics() -> None
```

##### `reset_advanced_performance_metrics` <a name="reset_advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedPerformanceMetrics"></a>

```python
def reset_advanced_performance_metrics() -> None
```

##### `reset_detailed_status_codes_metrics` <a name="reset_detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetDetailedStatusCodesMetrics"></a>

```python
def reset_detailed_status_codes_metrics() -> None
```

##### `reset_prefix_level` <a name="reset_prefix_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetPrefixLevel"></a>

```python
def reset_prefix_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics">activity_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics">advanced_cost_optimization_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics">advanced_data_protection_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics">advanced_performance_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics">detailed_status_codes_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel">prefix_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetricsInput">activity_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetricsInput">advanced_cost_optimization_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetricsInput">advanced_data_protection_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetricsInput">advanced_performance_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetricsInput">detailed_status_codes_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevelInput">prefix_level_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activity_metrics`<sup>Required</sup> <a name="activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics"></a>

```python
activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a>

---

##### `advanced_cost_optimization_metrics`<sup>Required</sup> <a name="advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```python
advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `advanced_data_protection_metrics`<sup>Required</sup> <a name="advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```python
advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `advanced_performance_metrics`<sup>Required</sup> <a name="advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics"></a>

```python
advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `detailed_status_codes_metrics`<sup>Required</sup> <a name="detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```python
detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `prefix_level`<sup>Required</sup> <a name="prefix_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel"></a>

```python
prefix_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a>

---

##### `activity_metrics_input`<sup>Optional</sup> <a name="activity_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetricsInput"></a>

```python
activity_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---

##### `advanced_cost_optimization_metrics_input`<sup>Optional</sup> <a name="advanced_cost_optimization_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetricsInput"></a>

```python
advanced_cost_optimization_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---

##### `advanced_data_protection_metrics_input`<sup>Optional</sup> <a name="advanced_data_protection_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetricsInput"></a>

```python
advanced_data_protection_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---

##### `advanced_performance_metrics_input`<sup>Optional</sup> <a name="advanced_performance_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetricsInput"></a>

```python
advanced_performance_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---

##### `detailed_status_codes_metrics_input`<sup>Optional</sup> <a name="detailed_status_codes_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetricsInput"></a>

```python
detailed_status_codes_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---

##### `prefix_level_input`<sup>Optional</sup> <a name="prefix_level_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevelInput"></a>

```python
prefix_level_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics">put_storage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resetStorageMetrics">reset_storage_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_storage_metrics` <a name="put_storage_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics"></a>

```python
def put_storage_metrics(
  is_enabled: bool | IResolvable = None,
  selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether prefix-level storage metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

###### `selection_criteria`<sup>Optional</sup> <a name="selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics.parameter.selectionCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

Selection criteria for prefix-level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#selection_criteria S3StorageLens#selection_criteria}

---

##### `reset_storage_metrics` <a name="reset_storage_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resetStorageMetrics"></a>

```python
def reset_storage_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics">storage_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetricsInput">storage_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_metrics`<sup>Required</sup> <a name="storage_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics"></a>

```python
storage_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a>

---

##### `storage_metrics_input`<sup>Optional</sup> <a name="storage_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetricsInput"></a>

```python
storage_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria">put_selection_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetSelectionCriteria">reset_selection_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_selection_criteria` <a name="put_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria"></a>

```python
def put_selection_criteria(
  delimiter: str = None,
  max_depth: typing.Union[int, float] = None,
  min_storage_bytes_percentage: typing.Union[int, float] = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria.parameter.delimiter"></a>

- *Type:* str

Delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#delimiter S3StorageLens#delimiter}

---

###### `max_depth`<sup>Optional</sup> <a name="max_depth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria.parameter.maxDepth"></a>

- *Type:* typing.Union[int, float]

Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#max_depth S3StorageLens#max_depth}

---

###### `min_storage_bytes_percentage`<sup>Optional</sup> <a name="min_storage_bytes_percentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria.parameter.minStorageBytesPercentage"></a>

- *Type:* typing.Union[int, float]

The minimum storage bytes threshold for the prefixes to be included in the analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#min_storage_bytes_percentage S3StorageLens#min_storage_bytes_percentage}

---

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_selection_criteria` <a name="reset_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetSelectionCriteria"></a>

```python
def reset_selection_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria">selection_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteriaInput">selection_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selection_criteria`<sup>Required</sup> <a name="selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria"></a>

```python
selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a>

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `selection_criteria_input`<sup>Optional</sup> <a name="selection_criteria_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteriaInput"></a>

```python
selection_criteria_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMaxDepth">reset_max_depth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMinStorageBytesPercentage">reset_min_storage_bytes_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_max_depth` <a name="reset_max_depth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMaxDepth"></a>

```python
def reset_max_depth() -> None
```

##### `reset_min_storage_bytes_percentage` <a name="reset_min_storage_bytes_percentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMinStorageBytesPercentage"></a>

```python
def reset_min_storage_bytes_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepthInput">max_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentageInput">min_storage_bytes_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth">max_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage">min_storage_bytes_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `max_depth_input`<sup>Optional</sup> <a name="max_depth_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepthInput"></a>

```python
max_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_storage_bytes_percentage_input`<sup>Optional</sup> <a name="min_storage_bytes_percentage_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentageInput"></a>

```python
min_storage_bytes_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `max_depth`<sup>Required</sup> <a name="max_depth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth"></a>

```python
max_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_storage_bytes_percentage`<sup>Required</sup> <a name="min_storage_bytes_percentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage"></a>

```python
min_storage_bytes_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics">put_activity_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics">put_advanced_cost_optimization_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics">put_advanced_data_protection_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics">put_advanced_performance_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel">put_bucket_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics">put_detailed_status_codes_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel">put_storage_lens_group_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetActivityMetrics">reset_activity_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedCostOptimizationMetrics">reset_advanced_cost_optimization_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedDataProtectionMetrics">reset_advanced_data_protection_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedPerformanceMetrics">reset_advanced_performance_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetDetailedStatusCodesMetrics">reset_detailed_status_codes_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetStorageLensGroupLevel">reset_storage_lens_group_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_activity_metrics` <a name="put_activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics"></a>

```python
def put_activity_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_advanced_cost_optimization_metrics` <a name="put_advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics"></a>

```python
def put_advanced_cost_optimization_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_advanced_data_protection_metrics` <a name="put_advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics"></a>

```python
def put_advanced_data_protection_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_advanced_performance_metrics` <a name="put_advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics"></a>

```python
def put_advanced_performance_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_bucket_level` <a name="put_bucket_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel"></a>

```python
def put_bucket_level(
  activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics = None,
  advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics = None,
  advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics = None,
  advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics = None,
  detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics = None,
  prefix_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel = None
) -> None
```

###### `activity_metrics`<sup>Optional</sup> <a name="activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.activityMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

###### `advanced_cost_optimization_metrics`<sup>Optional</sup> <a name="advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.advancedCostOptimizationMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

###### `advanced_data_protection_metrics`<sup>Optional</sup> <a name="advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.advancedDataProtectionMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

###### `advanced_performance_metrics`<sup>Optional</sup> <a name="advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.advancedPerformanceMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

###### `detailed_status_codes_metrics`<sup>Optional</sup> <a name="detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.detailedStatusCodesMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

###### `prefix_level`<sup>Optional</sup> <a name="prefix_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.prefixLevel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

Prefix-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix_level S3StorageLens#prefix_level}

---

##### `put_detailed_status_codes_metrics` <a name="put_detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics"></a>

```python
def put_detailed_status_codes_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_storage_lens_group_level` <a name="put_storage_lens_group_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel"></a>

```python
def put_storage_lens_group_level(
  storage_lens_group_selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria = None
) -> None
```

###### `storage_lens_group_selection_criteria`<sup>Optional</sup> <a name="storage_lens_group_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel.parameter.storageLensGroupSelectionCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

Selection criteria for Storage Lens Group level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_group_selection_criteria S3StorageLens#storage_lens_group_selection_criteria}

---

##### `reset_activity_metrics` <a name="reset_activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetActivityMetrics"></a>

```python
def reset_activity_metrics() -> None
```

##### `reset_advanced_cost_optimization_metrics` <a name="reset_advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedCostOptimizationMetrics"></a>

```python
def reset_advanced_cost_optimization_metrics() -> None
```

##### `reset_advanced_data_protection_metrics` <a name="reset_advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedDataProtectionMetrics"></a>

```python
def reset_advanced_data_protection_metrics() -> None
```

##### `reset_advanced_performance_metrics` <a name="reset_advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedPerformanceMetrics"></a>

```python
def reset_advanced_performance_metrics() -> None
```

##### `reset_detailed_status_codes_metrics` <a name="reset_detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetDetailedStatusCodesMetrics"></a>

```python
def reset_detailed_status_codes_metrics() -> None
```

##### `reset_storage_lens_group_level` <a name="reset_storage_lens_group_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetStorageLensGroupLevel"></a>

```python
def reset_storage_lens_group_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics">activity_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics">advanced_cost_optimization_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics">advanced_data_protection_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics">advanced_performance_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel">bucket_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics">detailed_status_codes_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel">storage_lens_group_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetricsInput">activity_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetricsInput">advanced_cost_optimization_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetricsInput">advanced_data_protection_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetricsInput">advanced_performance_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevelInput">bucket_level_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetricsInput">detailed_status_codes_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevelInput">storage_lens_group_level_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activity_metrics`<sup>Required</sup> <a name="activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics"></a>

```python
activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a>

---

##### `advanced_cost_optimization_metrics`<sup>Required</sup> <a name="advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```python
advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `advanced_data_protection_metrics`<sup>Required</sup> <a name="advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```python
advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `advanced_performance_metrics`<sup>Required</sup> <a name="advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics"></a>

```python
advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `bucket_level`<sup>Required</sup> <a name="bucket_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel"></a>

```python
bucket_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a>

---

##### `detailed_status_codes_metrics`<sup>Required</sup> <a name="detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```python
detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `storage_lens_group_level`<sup>Required</sup> <a name="storage_lens_group_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel"></a>

```python
storage_lens_group_level: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a>

---

##### `activity_metrics_input`<sup>Optional</sup> <a name="activity_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetricsInput"></a>

```python
activity_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---

##### `advanced_cost_optimization_metrics_input`<sup>Optional</sup> <a name="advanced_cost_optimization_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetricsInput"></a>

```python
advanced_cost_optimization_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---

##### `advanced_data_protection_metrics_input`<sup>Optional</sup> <a name="advanced_data_protection_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetricsInput"></a>

```python
advanced_data_protection_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---

##### `advanced_performance_metrics_input`<sup>Optional</sup> <a name="advanced_performance_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetricsInput"></a>

```python
advanced_performance_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---

##### `bucket_level_input`<sup>Optional</sup> <a name="bucket_level_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevelInput"></a>

```python
bucket_level_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelBucketLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---

##### `detailed_status_codes_metrics_input`<sup>Optional</sup> <a name="detailed_status_codes_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetricsInput"></a>

```python
detailed_status_codes_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---

##### `storage_lens_group_level_input`<sup>Optional</sup> <a name="storage_lens_group_level_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevelInput"></a>

```python
storage_lens_group_level_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria">put_storage_lens_group_selection_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resetStorageLensGroupSelectionCriteria">reset_storage_lens_group_selection_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_storage_lens_group_selection_criteria` <a name="put_storage_lens_group_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria"></a>

```python
def put_storage_lens_group_selection_criteria(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria.parameter.exclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}.

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria.parameter.include"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#include S3StorageLens#include}.

---

##### `reset_storage_lens_group_selection_criteria` <a name="reset_storage_lens_group_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resetStorageLensGroupSelectionCriteria"></a>

```python
def reset_storage_lens_group_selection_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria">storage_lens_group_selection_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteriaInput">storage_lens_group_selection_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_lens_group_selection_criteria`<sup>Required</sup> <a name="storage_lens_group_selection_criteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria"></a>

```python
storage_lens_group_selection_criteria: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a>

---

##### `storage_lens_group_selection_criteria_input`<sup>Optional</sup> <a name="storage_lens_group_selection_criteria_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteriaInput"></a>

```python
storage_lens_group_selection_criteria_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---


### S3StorageLensStorageLensConfigurationAwsOrgOutputReference <a name="S3StorageLensStorageLensConfigurationAwsOrgOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationAwsOrg
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---


### S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---


### S3StorageLensStorageLensConfigurationDataExportOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics">put_cloudwatch_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination">put_s3_bucket_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination">put_storage_lens_table_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetCloudwatchMetrics">reset_cloudwatch_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetS3BucketDestination">reset_s3_bucket_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetStorageLensTableDestination">reset_storage_lens_table_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_metrics` <a name="put_cloudwatch_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics"></a>

```python
def put_cloudwatch_metrics(
  is_enabled: bool | IResolvable = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether CloudWatch metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `put_s3_bucket_destination` <a name="put_s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination"></a>

```python
def put_s3_bucket_destination(
  account_id: str = None,
  arn: str = None,
  encryption: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption = None,
  format: str = None,
  output_schema_version: str = None,
  prefix: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.accountId"></a>

- *Type:* str

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.arn"></a>

- *Type:* str

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.format"></a>

- *Type:* str

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

###### `output_schema_version`<sup>Optional</sup> <a name="output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.outputSchemaVersion"></a>

- *Type:* str

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.prefix"></a>

- *Type:* str

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

##### `put_storage_lens_table_destination` <a name="put_storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination"></a>

```python
def put_storage_lens_table_destination(
  encryption: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption = None,
  is_enabled: bool | IResolvable = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `reset_cloudwatch_metrics` <a name="reset_cloudwatch_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetCloudwatchMetrics"></a>

```python
def reset_cloudwatch_metrics() -> None
```

##### `reset_s3_bucket_destination` <a name="reset_s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetS3BucketDestination"></a>

```python
def reset_s3_bucket_destination() -> None
```

##### `reset_storage_lens_table_destination` <a name="reset_storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetStorageLensTableDestination"></a>

```python
def reset_storage_lens_table_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics">cloudwatch_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination">s3_bucket_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination">storage_lens_table_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetricsInput">cloudwatch_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestinationInput">s3_bucket_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestinationInput">storage_lens_table_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_metrics`<sup>Required</sup> <a name="cloudwatch_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics"></a>

```python
cloudwatch_metrics: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a>

---

##### `s3_bucket_destination`<sup>Required</sup> <a name="s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination"></a>

```python
s3_bucket_destination: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a>

---

##### `storage_lens_table_destination`<sup>Required</sup> <a name="storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination"></a>

```python
storage_lens_table_destination: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a>

---

##### `cloudwatch_metrics_input`<sup>Optional</sup> <a name="cloudwatch_metrics_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetricsInput"></a>

```python
cloudwatch_metrics_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---

##### `s3_bucket_destination_input`<sup>Optional</sup> <a name="s3_bucket_destination_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestinationInput"></a>

```python
s3_bucket_destination_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportS3BucketDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---

##### `storage_lens_table_destination_input`<sup>Optional</sup> <a name="storage_lens_table_destination_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestinationInput"></a>

```python
storage_lens_table_destination_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExport
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms">put_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms">reset_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSses3">reset_sses3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssekms` <a name="put_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms"></a>

```python
def put_ssekms(
  key_id: str = None
) -> None
```

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms.parameter.keyId"></a>

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

##### `reset_ssekms` <a name="reset_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms"></a>

```python
def reset_ssekms() -> None
```

##### `reset_sses3` <a name="reset_sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSses3"></a>

```python
def reset_sses3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput">ssekms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input">sses3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekms_input`<sup>Optional</sup> <a name="ssekms_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```python
ssekms_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `sses3_input`<sup>Optional</sup> <a name="sses3_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input"></a>

```python
sses3_input: str
```

- *Type:* str

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion">reset_output_schema_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption"></a>

```python
def put_encryption(
  ssekms: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms = None,
  sses3: str = None
) -> None
```

###### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption.parameter.ssekms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

###### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption.parameter.sses3"></a>

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_output_schema_version` <a name="reset_output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion"></a>

```python
def reset_output_schema_version() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput">output_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">output_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `output_schema_version_input`<sup>Optional</sup> <a name="output_schema_version_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput"></a>

```python
output_schema_version_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `output_schema_version`<sup>Required</sup> <a name="output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```python
output_schema_version: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportS3BucketDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms">put_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms">reset_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3">reset_sses3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssekms` <a name="put_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms"></a>

```python
def put_ssekms(
  key_id: str = None
) -> None
```

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms.parameter.keyId"></a>

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

##### `reset_ssekms` <a name="reset_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms"></a>

```python
def reset_ssekms() -> None
```

##### `reset_sses3` <a name="reset_sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3"></a>

```python
def reset_sses3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput">ssekms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input">sses3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekms_input`<sup>Optional</sup> <a name="ssekms_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```python
ssekms_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `sses3_input`<sup>Optional</sup> <a name="sses3_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input"></a>

```python
sses3_input: str
```

- *Type:* str

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption"></a>

```python
def put_encryption(
  ssekms: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms = None,
  sses3: str = None
) -> None
```

###### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.ssekms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

###### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.sses3"></a>

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---


### S3StorageLensStorageLensConfigurationExcludeOutputReference <a name="S3StorageLensStorageLensConfigurationExcludeOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetBuckets">reset_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetRegions">reset_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_buckets` <a name="reset_buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetBuckets"></a>

```python
def reset_buckets() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.bucketsInput">buckets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets">buckets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `buckets_input`<sup>Optional</sup> <a name="buckets_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.bucketsInput"></a>

```python
buckets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets"></a>

```python
buckets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExclude
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination">put_s3_bucket_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination">put_storage_lens_table_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetS3BucketDestination">reset_s3_bucket_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetStorageLensTableDestination">reset_storage_lens_table_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_bucket_destination` <a name="put_s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination"></a>

```python
def put_s3_bucket_destination(
  account_id: str = None,
  arn: str = None,
  encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption = None,
  format: str = None,
  output_schema_version: str = None,
  prefix: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.accountId"></a>

- *Type:* str

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.arn"></a>

- *Type:* str

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.format"></a>

- *Type:* str

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

###### `output_schema_version`<sup>Optional</sup> <a name="output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.outputSchemaVersion"></a>

- *Type:* str

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.prefix"></a>

- *Type:* str

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

##### `put_storage_lens_table_destination` <a name="put_storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination"></a>

```python
def put_storage_lens_table_destination(
  encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption = None,
  is_enabled: bool | IResolvable = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `reset_s3_bucket_destination` <a name="reset_s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetS3BucketDestination"></a>

```python
def reset_s3_bucket_destination() -> None
```

##### `reset_storage_lens_table_destination` <a name="reset_storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetStorageLensTableDestination"></a>

```python
def reset_storage_lens_table_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination">s3_bucket_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination">storage_lens_table_destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestinationInput">s3_bucket_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestinationInput">storage_lens_table_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_destination`<sup>Required</sup> <a name="s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination"></a>

```python
s3_bucket_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a>

---

##### `storage_lens_table_destination`<sup>Required</sup> <a name="storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination"></a>

```python
storage_lens_table_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a>

---

##### `s3_bucket_destination_input`<sup>Optional</sup> <a name="s3_bucket_destination_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestinationInput"></a>

```python
s3_bucket_destination_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---

##### `storage_lens_table_destination_input`<sup>Optional</sup> <a name="storage_lens_table_destination_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestinationInput"></a>

```python
storage_lens_table_destination_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms">put_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms">reset_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSses3">reset_sses3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssekms` <a name="put_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms"></a>

```python
def put_ssekms(
  key_id: str = None
) -> None
```

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms.parameter.keyId"></a>

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

##### `reset_ssekms` <a name="reset_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms"></a>

```python
def reset_ssekms() -> None
```

##### `reset_sses3` <a name="reset_sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSses3"></a>

```python
def reset_sses3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput">ssekms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input">sses3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekms_input`<sup>Optional</sup> <a name="ssekms_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```python
ssekms_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `sses3_input`<sup>Optional</sup> <a name="sses3_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input"></a>

```python
sses3_input: str
```

- *Type:* str

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion">reset_output_schema_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption"></a>

```python
def put_encryption(
  ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms = None,
  sses3: str = None
) -> None
```

###### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption.parameter.ssekms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

###### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption.parameter.sses3"></a>

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_output_schema_version` <a name="reset_output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion"></a>

```python
def reset_output_schema_version() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput">output_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">output_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `output_schema_version_input`<sup>Optional</sup> <a name="output_schema_version_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput"></a>

```python
output_schema_version_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `output_schema_version`<sup>Required</sup> <a name="output_schema_version" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```python
output_schema_version: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms">put_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms">reset_ssekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3">reset_sses3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssekms` <a name="put_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms"></a>

```python
def put_ssekms(
  key_id: str = None
) -> None
```

###### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms.parameter.keyId"></a>

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

##### `reset_ssekms` <a name="reset_ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms"></a>

```python
def reset_ssekms() -> None
```

##### `reset_sses3` <a name="reset_sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3"></a>

```python
def reset_sses3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput">ssekms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input">sses3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```python
ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `ssekms_input`<sup>Optional</sup> <a name="ssekms_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```python
ssekms_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `sses3_input`<sup>Optional</sup> <a name="sses3_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input"></a>

```python
sses3_input: str
```

- *Type:* str

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```python
sses3: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption"></a>

```python
def put_encryption(
  ssekms: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms = None,
  sses3: str = None
) -> None
```

###### `ssekms`<sup>Optional</sup> <a name="ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.ssekms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

###### `sses3`<sup>Optional</sup> <a name="sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.sses3"></a>

- *Type:* str

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```python
encryption: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---


### S3StorageLensStorageLensConfigurationIncludeOutputReference <a name="S3StorageLensStorageLensConfigurationIncludeOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetBuckets">reset_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetRegions">reset_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_buckets` <a name="reset_buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetBuckets"></a>

```python
def reset_buckets() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.bucketsInput">buckets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets">buckets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `buckets_input`<sup>Optional</sup> <a name="buckets_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.bucketsInput"></a>

```python
buckets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets"></a>

```python
buckets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfigurationInclude
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---


### S3StorageLensStorageLensConfigurationOutputReference <a name="S3StorageLensStorageLensConfigurationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel">put_account_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg">put_aws_org</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport">put_data_export</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude">put_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport">put_expanded_prefixes_data_export</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude">put_include</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetAwsOrg">reset_aws_org</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetDataExport">reset_data_export</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExpandedPrefixesDataExport">reset_expanded_prefixes_data_export</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetInclude">reset_include</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetPrefixDelimiter">reset_prefix_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_account_level` <a name="put_account_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel"></a>

```python
def put_account_level(
  bucket_level: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel,
  activity_metrics: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics = None,
  advanced_cost_optimization_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics = None,
  advanced_data_protection_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics = None,
  advanced_performance_metrics: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics = None,
  detailed_status_codes_metrics: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics = None,
  storage_lens_group_level: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel = None
) -> None
```

###### `bucket_level`<sup>Required</sup> <a name="bucket_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.bucketLevel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

Bucket-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#bucket_level S3StorageLens#bucket_level}

---

###### `activity_metrics`<sup>Optional</sup> <a name="activity_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.activityMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

###### `advanced_cost_optimization_metrics`<sup>Optional</sup> <a name="advanced_cost_optimization_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.advancedCostOptimizationMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

###### `advanced_data_protection_metrics`<sup>Optional</sup> <a name="advanced_data_protection_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.advancedDataProtectionMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

###### `advanced_performance_metrics`<sup>Optional</sup> <a name="advanced_performance_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.advancedPerformanceMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

###### `detailed_status_codes_metrics`<sup>Optional</sup> <a name="detailed_status_codes_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.detailedStatusCodesMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

###### `storage_lens_group_level`<sup>Optional</sup> <a name="storage_lens_group_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.storageLensGroupLevel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

Specifies the details of Amazon S3 Storage Lens Group configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_group_level S3StorageLens#storage_lens_group_level}

---

##### `put_aws_org` <a name="put_aws_org" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg"></a>

```python
def put_aws_org(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg.parameter.arn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `put_data_export` <a name="put_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport"></a>

```python
def put_data_export(
  cloudwatch_metrics: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics = None,
  s3_bucket_destination: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination = None,
  storage_lens_table_destination: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination = None
) -> None
```

###### `cloudwatch_metrics`<sup>Optional</sup> <a name="cloudwatch_metrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport.parameter.cloudwatchMetrics"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#cloudwatch_metrics S3StorageLens#cloudwatch_metrics}

---

###### `s3_bucket_destination`<sup>Optional</sup> <a name="s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport.parameter.s3BucketDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

###### `storage_lens_table_destination`<sup>Optional</sup> <a name="storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport.parameter.storageLensTableDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

##### `put_exclude` <a name="put_exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude"></a>

```python
def put_exclude(
  buckets: typing.List[str] = None,
  regions: typing.List[str] = None
) -> None
```

###### `buckets`<sup>Optional</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude.parameter.buckets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

###### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

##### `put_expanded_prefixes_data_export` <a name="put_expanded_prefixes_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport"></a>

```python
def put_expanded_prefixes_data_export(
  s3_bucket_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination = None,
  storage_lens_table_destination: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination = None
) -> None
```

###### `s3_bucket_destination`<sup>Optional</sup> <a name="s3_bucket_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport.parameter.s3BucketDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

###### `storage_lens_table_destination`<sup>Optional</sup> <a name="storage_lens_table_destination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport.parameter.storageLensTableDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

##### `put_include` <a name="put_include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude"></a>

```python
def put_include(
  buckets: typing.List[str] = None,
  regions: typing.List[str] = None
) -> None
```

###### `buckets`<sup>Optional</sup> <a name="buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude.parameter.buckets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

###### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

##### `reset_aws_org` <a name="reset_aws_org" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetAwsOrg"></a>

```python
def reset_aws_org() -> None
```

##### `reset_data_export` <a name="reset_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetDataExport"></a>

```python
def reset_data_export() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_expanded_prefixes_data_export` <a name="reset_expanded_prefixes_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExpandedPrefixesDataExport"></a>

```python
def reset_expanded_prefixes_data_export() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```

##### `reset_prefix_delimiter` <a name="reset_prefix_delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetPrefixDelimiter"></a>

```python
def reset_prefix_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevel">account_level</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrg">aws_org</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference">S3StorageLensStorageLensConfigurationAwsOrgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExport">data_export</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference">S3StorageLensStorageLensConfigurationDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference">S3StorageLensStorageLensConfigurationExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport">expanded_prefixes_data_export</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.include">include</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference">S3StorageLensStorageLensConfigurationIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn">storage_lens_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevelInput">account_level_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrgInput">aws_org_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExportInput">data_export_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.excludeInput">exclude_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExportInput">expanded_prefixes_data_export_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.includeInput">include_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiterInput">prefix_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter">prefix_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_level`<sup>Required</sup> <a name="account_level" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevel"></a>

```python
account_level: S3StorageLensStorageLensConfigurationAccountLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelOutputReference</a>

---

##### `aws_org`<sup>Required</sup> <a name="aws_org" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrg"></a>

```python
aws_org: S3StorageLensStorageLensConfigurationAwsOrgOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference">S3StorageLensStorageLensConfigurationAwsOrgOutputReference</a>

---

##### `data_export`<sup>Required</sup> <a name="data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExport"></a>

```python
data_export: S3StorageLensStorageLensConfigurationDataExportOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference">S3StorageLensStorageLensConfigurationDataExportOutputReference</a>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.exclude"></a>

```python
exclude: S3StorageLensStorageLensConfigurationExcludeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference">S3StorageLensStorageLensConfigurationExcludeOutputReference</a>

---

##### `expanded_prefixes_data_export`<sup>Required</sup> <a name="expanded_prefixes_data_export" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport"></a>

```python
expanded_prefixes_data_export: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.include"></a>

```python
include: S3StorageLensStorageLensConfigurationIncludeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference">S3StorageLensStorageLensConfigurationIncludeOutputReference</a>

---

##### `storage_lens_arn`<sup>Required</sup> <a name="storage_lens_arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn"></a>

```python
storage_lens_arn: str
```

- *Type:* str

---

##### `account_level_input`<sup>Optional</sup> <a name="account_level_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevelInput"></a>

```python
account_level_input: IResolvable | S3StorageLensStorageLensConfigurationAccountLevel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---

##### `aws_org_input`<sup>Optional</sup> <a name="aws_org_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrgInput"></a>

```python
aws_org_input: IResolvable | S3StorageLensStorageLensConfigurationAwsOrg
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---

##### `data_export_input`<sup>Optional</sup> <a name="data_export_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExportInput"></a>

```python
data_export_input: IResolvable | S3StorageLensStorageLensConfigurationDataExport
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.excludeInput"></a>

```python
exclude_input: IResolvable | S3StorageLensStorageLensConfigurationExclude
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---

##### `expanded_prefixes_data_export_input`<sup>Optional</sup> <a name="expanded_prefixes_data_export_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExportInput"></a>

```python
expanded_prefixes_data_export_input: IResolvable | S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.includeInput"></a>

```python
include_input: IResolvable | S3StorageLensStorageLensConfigurationInclude
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_delimiter_input`<sup>Optional</sup> <a name="prefix_delimiter_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiterInput"></a>

```python
prefix_delimiter_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_delimiter`<sup>Required</sup> <a name="prefix_delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter"></a>

```python
prefix_delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensStorageLensConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---


### S3StorageLensTagsList <a name="S3StorageLensTagsList" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3StorageLensTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3StorageLensTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>]

---


### S3StorageLensTagsOutputReference <a name="S3StorageLensTagsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens

s3StorageLens.S3StorageLensTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>

---



