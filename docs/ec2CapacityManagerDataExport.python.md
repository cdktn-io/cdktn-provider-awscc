# `ec2CapacityManagerDataExport` Submodule <a name="`ec2CapacityManagerDataExport` Submodule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityManagerDataExport <a name="Ec2CapacityManagerDataExport" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export awscc_ec2_capacity_manager_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  output_format: str,
  s3_bucket_name: str,
  schedule: str,
  s3_bucket_prefix: str = None,
  tags: IResolvable | typing.List[Ec2CapacityManagerDataExportTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.outputFormat">output_format</a></code> | <code>str</code> | The format of the exported capacity manager data. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket where the capacity manager data export will be stored. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | The schedule for the capacity manager data export. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketPrefix">s3_bucket_prefix</a></code> | <code>str</code> | The prefix for the S3 bucket location where exported files will be placed. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]</code> | An array of key-value pairs to apply to the capacity manager data export. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.outputFormat"></a>

- *Type:* str

The format of the exported capacity manager data.

Choose 'csv' for comma-separated values or 'parquet' for optimized columnar storage format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#output_format Ec2CapacityManagerDataExport#output_format}

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketName"></a>

- *Type:* str

The name of the Amazon S3 bucket where the capacity manager data export will be stored.

The bucket must exist and be accessible by EC2 Capacity Manager service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_name Ec2CapacityManagerDataExport#s3_bucket_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.schedule"></a>

- *Type:* str

The schedule for the capacity manager data export.

Currently supports hourly exports that provide periodic snapshots of capacity manager data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#schedule Ec2CapacityManagerDataExport#schedule}

---

##### `s3_bucket_prefix`<sup>Optional</sup> <a name="s3_bucket_prefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.s3BucketPrefix"></a>

- *Type:* str

The prefix for the S3 bucket location where exported files will be placed.

If not specified, files will be placed in the root of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_prefix Ec2CapacityManagerDataExport#s3_bucket_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]

An array of key-value pairs to apply to the capacity manager data export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#tags Ec2CapacityManagerDataExport#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetS3BucketPrefix">reset_s3_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2CapacityManagerDataExportTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]

---

##### `reset_s3_bucket_prefix` <a name="reset_s3_bucket_prefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetS3BucketPrefix"></a>

```python
def reset_s3_bucket_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2CapacityManagerDataExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2CapacityManagerDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityManagerDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.capacityManagerDataExportId">capacity_manager_data_export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList">Ec2CapacityManagerDataExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefixInput">s3_bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefix">s3_bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_manager_data_export_id`<sup>Required</sup> <a name="capacity_manager_data_export_id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.capacityManagerDataExportId"></a>

```python
capacity_manager_data_export_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tags"></a>

```python
tags: Ec2CapacityManagerDataExportTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList">Ec2CapacityManagerDataExportTagsList</a>

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_bucket_prefix_input`<sup>Optional</sup> <a name="s3_bucket_prefix_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefixInput"></a>

```python
s3_bucket_prefix_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2CapacityManagerDataExportTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_bucket_prefix`<sup>Required</sup> <a name="s3_bucket_prefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefix"></a>

```python
s3_bucket_prefix: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityManagerDataExportConfig <a name="Ec2CapacityManagerDataExportConfig" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  output_format: str,
  s3_bucket_name: str,
  schedule: str,
  s3_bucket_prefix: str = None,
  tags: IResolvable | typing.List[Ec2CapacityManagerDataExportTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.outputFormat">output_format</a></code> | <code>str</code> | The format of the exported capacity manager data. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket where the capacity manager data export will be stored. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.schedule">schedule</a></code> | <code>str</code> | The schedule for the capacity manager data export. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketPrefix">s3_bucket_prefix</a></code> | <code>str</code> | The prefix for the S3 bucket location where exported files will be placed. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]</code> | An array of key-value pairs to apply to the capacity manager data export. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The format of the exported capacity manager data.

Choose 'csv' for comma-separated values or 'parquet' for optimized columnar storage format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#output_format Ec2CapacityManagerDataExport#output_format}

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

The name of the Amazon S3 bucket where the capacity manager data export will be stored.

The bucket must exist and be accessible by EC2 Capacity Manager service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_name Ec2CapacityManagerDataExport#s3_bucket_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The schedule for the capacity manager data export.

Currently supports hourly exports that provide periodic snapshots of capacity manager data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#schedule Ec2CapacityManagerDataExport#schedule}

---

##### `s3_bucket_prefix`<sup>Optional</sup> <a name="s3_bucket_prefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketPrefix"></a>

```python
s3_bucket_prefix: str
```

- *Type:* str

The prefix for the S3 bucket location where exported files will be placed.

If not specified, files will be placed in the root of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_prefix Ec2CapacityManagerDataExport#s3_bucket_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2CapacityManagerDataExportTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]

An array of key-value pairs to apply to the capacity manager data export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#tags Ec2CapacityManagerDataExport#tags}

---

### Ec2CapacityManagerDataExportTags <a name="Ec2CapacityManagerDataExportTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#key Ec2CapacityManagerDataExport#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_capacity_manager_data_export#value Ec2CapacityManagerDataExport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityManagerDataExportTagsList <a name="Ec2CapacityManagerDataExportTagsList" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CapacityManagerDataExportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CapacityManagerDataExportTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>]

---


### Ec2CapacityManagerDataExportTagsOutputReference <a name="Ec2CapacityManagerDataExportTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_capacity_manager_data_export

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CapacityManagerDataExportTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>

---



