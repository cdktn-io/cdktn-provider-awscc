# `s3ExpressDirectoryBucket` Submodule <a name="`s3ExpressDirectoryBucket` Submodule" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ExpressDirectoryBucket <a name="S3ExpressDirectoryBucket" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_redundancy: str,
  location_name: str,
  bucket_encryption: S3ExpressDirectoryBucketBucketEncryption = None,
  bucket_name: str = None,
  inventory_configurations: IResolvable | typing.List[S3ExpressDirectoryBucketInventoryConfigurations] = None,
  lifecycle_configuration: S3ExpressDirectoryBucketLifecycleConfiguration = None,
  metrics_configurations: IResolvable | typing.List[S3ExpressDirectoryBucketMetricsConfigurations] = None,
  tags: IResolvable | typing.List[S3ExpressDirectoryBucketTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dataRedundancy">data_redundancy</a></code> | <code>str</code> | Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.locationName">location_name</a></code> | <code>str</code> | Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketEncryption">bucket_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | Specifies a name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.inventoryConfigurations">inventory_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]</code> | The inventory configuration for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.metricsConfigurations">metrics_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]</code> | Specifies the metrics configurations for the Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_redundancy`<sup>Required</sup> <a name="data_redundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.dataRedundancy"></a>

- *Type:* str

Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.locationName"></a>

- *Type:* str

Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created.

An example Availability Zone ID value is 'use1-az5'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}

---

##### `bucket_encryption`<sup>Optional</sup> <a name="bucket_encryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketEncryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.bucketName"></a>

- *Type:* str

Specifies a name for the bucket.

The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}

---

##### `inventory_configurations`<sup>Optional</sup> <a name="inventory_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.inventoryConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]

The inventory configuration for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}

---

##### `lifecycle_configuration`<sup>Optional</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}

---

##### `metrics_configurations`<sup>Optional</sup> <a name="metrics_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.metricsConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]

Specifies the metrics configurations for the Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption">put_bucket_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations">put_inventory_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration">put_lifecycle_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations">put_metrics_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption">reset_bucket_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations">reset_inventory_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration">reset_lifecycle_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations">reset_metrics_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bucket_encryption` <a name="put_bucket_encryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption"></a>

```python
def put_bucket_encryption(
  server_side_encryption_configuration: IResolvable | typing.List[S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration] = None
) -> None
```

###### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]

Specifies the default server-side-encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#server_side_encryption_configuration S3ExpressDirectoryBucket#server_side_encryption_configuration}

---

##### `put_inventory_configurations` <a name="put_inventory_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations"></a>

```python
def put_inventory_configurations(
  value: IResolvable | typing.List[S3ExpressDirectoryBucketInventoryConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]

---

##### `put_lifecycle_configuration` <a name="put_lifecycle_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration"></a>

```python
def put_lifecycle_configuration(
  rules: IResolvable | typing.List[S3ExpressDirectoryBucketLifecycleConfigurationRules] = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]

A lifecycle rule for individual objects in an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#rules S3ExpressDirectoryBucket#rules}

---

##### `put_metrics_configurations` <a name="put_metrics_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations"></a>

```python
def put_metrics_configurations(
  value: IResolvable | typing.List[S3ExpressDirectoryBucketMetricsConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3ExpressDirectoryBucketTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]

---

##### `reset_bucket_encryption` <a name="reset_bucket_encryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption"></a>

```python
def reset_bucket_encryption() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_inventory_configurations` <a name="reset_inventory_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations"></a>

```python
def reset_inventory_configurations() -> None
```

##### `reset_lifecycle_configuration` <a name="reset_lifecycle_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration"></a>

```python
def reset_lifecycle_configuration() -> None
```

##### `reset_metrics_configurations` <a name="reset_metrics_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations"></a>

```python
def reset_metrics_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ExpressDirectoryBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ExpressDirectoryBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3ExpressDirectoryBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption">bucket_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations">inventory_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations">metrics_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput">bucket_encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput">data_redundancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput">inventory_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput">lifecycle_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput">location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput">metrics_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy">data_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `bucket_encryption`<sup>Required</sup> <a name="bucket_encryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption"></a>

```python
bucket_encryption: S3ExpressDirectoryBucketBucketEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_configurations`<sup>Required</sup> <a name="inventory_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations"></a>

```python
inventory_configurations: S3ExpressDirectoryBucketInventoryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a>

---

##### `lifecycle_configuration`<sup>Required</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: S3ExpressDirectoryBucketLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a>

---

##### `metrics_configurations`<sup>Required</sup> <a name="metrics_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations"></a>

```python
metrics_configurations: S3ExpressDirectoryBucketMetricsConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags"></a>

```python
tags: S3ExpressDirectoryBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a>

---

##### `bucket_encryption_input`<sup>Optional</sup> <a name="bucket_encryption_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput"></a>

```python
bucket_encryption_input: IResolvable | S3ExpressDirectoryBucketBucketEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `data_redundancy_input`<sup>Optional</sup> <a name="data_redundancy_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput"></a>

```python
data_redundancy_input: str
```

- *Type:* str

---

##### `inventory_configurations_input`<sup>Optional</sup> <a name="inventory_configurations_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput"></a>

```python
inventory_configurations_input: IResolvable | typing.List[S3ExpressDirectoryBucketInventoryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]

---

##### `lifecycle_configuration_input`<sup>Optional</sup> <a name="lifecycle_configuration_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput"></a>

```python
lifecycle_configuration_input: IResolvable | S3ExpressDirectoryBucketLifecycleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---

##### `location_name_input`<sup>Optional</sup> <a name="location_name_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput"></a>

```python
location_name_input: str
```

- *Type:* str

---

##### `metrics_configurations_input`<sup>Optional</sup> <a name="metrics_configurations_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput"></a>

```python
metrics_configurations_input: IResolvable | typing.List[S3ExpressDirectoryBucketMetricsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3ExpressDirectoryBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `data_redundancy`<sup>Required</sup> <a name="data_redundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy"></a>

```python
data_redundancy: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ExpressDirectoryBucketBucketEncryption <a name="S3ExpressDirectoryBucketBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption(
  server_side_encryption_configuration: IResolvable | typing.List[S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]</code> | Specifies the default server-side-encryption configuration. |

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: IResolvable | typing.List[S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]

Specifies the default server-side-encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#server_side_encryption_configuration S3ExpressDirectoryBucket#server_side_encryption_configuration}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration(
  bucket_key_enabled: bool | IResolvable = None,
  server_side_encryption_by_default: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault">server_side_encryption_by_default</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | Specifies the default server-side encryption to apply to new objects in the bucket. |

---

##### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.

Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_key_enabled S3ExpressDirectoryBucket#bucket_key_enabled}

---

##### `server_side_encryption_by_default`<sup>Optional</sup> <a name="server_side_encryption_by_default" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault"></a>

```python
server_side_encryption_by_default: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

Specifies the default server-side encryption to apply to new objects in the bucket.

If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#server_side_encryption_by_default S3ExpressDirectoryBucket#server_side_encryption_by_default}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault(
  kms_master_key_id: str = None,
  sse_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}. |

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.

This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#kms_master_key_id S3ExpressDirectoryBucket#kms_master_key_id}

---

##### `sse_algorithm`<sup>Optional</sup> <a name="sse_algorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}.

---

### S3ExpressDirectoryBucketConfig <a name="S3ExpressDirectoryBucketConfig" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_redundancy: str,
  location_name: str,
  bucket_encryption: S3ExpressDirectoryBucketBucketEncryption = None,
  bucket_name: str = None,
  inventory_configurations: IResolvable | typing.List[S3ExpressDirectoryBucketInventoryConfigurations] = None,
  lifecycle_configuration: S3ExpressDirectoryBucketLifecycleConfiguration = None,
  metrics_configurations: IResolvable | typing.List[S3ExpressDirectoryBucketMetricsConfigurations] = None,
  tags: IResolvable | typing.List[S3ExpressDirectoryBucketTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy">data_redundancy</a></code> | <code>str</code> | Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName">location_name</a></code> | <code>str</code> | Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption">bucket_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | Specifies a name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations">inventory_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]</code> | The inventory configuration for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations">metrics_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]</code> | Specifies the metrics configurations for the Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_redundancy`<sup>Required</sup> <a name="data_redundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy"></a>

```python
data_redundancy: str
```

- *Type:* str

Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created.

An example Availability Zone ID value is 'use1-az5'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}

---

##### `bucket_encryption`<sup>Optional</sup> <a name="bucket_encryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption"></a>

```python
bucket_encryption: S3ExpressDirectoryBucketBucketEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Specifies a name for the bucket.

The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}

---

##### `inventory_configurations`<sup>Optional</sup> <a name="inventory_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations"></a>

```python
inventory_configurations: IResolvable | typing.List[S3ExpressDirectoryBucketInventoryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]

The inventory configuration for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}

---

##### `lifecycle_configuration`<sup>Optional</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: S3ExpressDirectoryBucketLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}

---

##### `metrics_configurations`<sup>Optional</sup> <a name="metrics_configurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations"></a>

```python
metrics_configurations: IResolvable | typing.List[S3ExpressDirectoryBucketMetricsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]

Specifies the metrics configurations for the Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3ExpressDirectoryBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}.

---

### S3ExpressDirectoryBucketInventoryConfigurations <a name="S3ExpressDirectoryBucketInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations(
  destination: S3ExpressDirectoryBucketInventoryConfigurationsDestination = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  included_object_versions: str = None,
  optional_fields: typing.List[str] = None,
  prefix: str = None,
  schedule_frequency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | Specifies information about where to publish inventory reports for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the inventory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id">id</a></code> | <code>str</code> | The ID used to identify the inventory configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions">included_object_versions</a></code> | <code>str</code> | Object versions to include in the inventory list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields">optional_fields</a></code> | <code>typing.List[str]</code> | Contains the optional fields that are included in the inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix">prefix</a></code> | <code>str</code> | The prefix that is prepended to all inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency">schedule_frequency</a></code> | <code>str</code> | Specifies the schedule for generating inventory results. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination"></a>

```python
destination: S3ExpressDirectoryBucketInventoryConfigurationsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

Specifies information about where to publish inventory reports for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#destination S3ExpressDirectoryBucket#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the inventory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#enabled S3ExpressDirectoryBucket#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

The ID used to identify the inventory configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `included_object_versions`<sup>Optional</sup> <a name="included_object_versions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions"></a>

```python
included_object_versions: str
```

- *Type:* str

Object versions to include in the inventory list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#included_object_versions S3ExpressDirectoryBucket#included_object_versions}

---

##### `optional_fields`<sup>Optional</sup> <a name="optional_fields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields"></a>

```python
optional_fields: typing.List[str]
```

- *Type:* typing.List[str]

Contains the optional fields that are included in the inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#optional_fields S3ExpressDirectoryBucket#optional_fields}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix that is prepended to all inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

##### `schedule_frequency`<sup>Optional</sup> <a name="schedule_frequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency"></a>

```python
schedule_frequency: str
```

- *Type:* str

Specifies the schedule for generating inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#schedule_frequency S3ExpressDirectoryBucket#schedule_frequency}

---

### S3ExpressDirectoryBucketInventoryConfigurationsDestination <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination(
  bucket_account_id: str = None,
  bucket_arn: str = None,
  format: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | The account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn">bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format">format</a></code> | <code>str</code> | Specifies the file format used when exporting data to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix">prefix</a></code> | <code>str</code> | The prefix to use when exporting data. The prefix is prepended to all results. |

---

##### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

The account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_account_id S3ExpressDirectoryBucket#bucket_account_id}

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_arn S3ExpressDirectoryBucket#bucket_arn}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format"></a>

```python
format: str
```

- *Type:* str

Specifies the file format used when exporting data to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#format S3ExpressDirectoryBucket#format}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix to use when exporting data. The prefix is prepended to all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketLifecycleConfiguration <a name="S3ExpressDirectoryBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration(
  rules: IResolvable | typing.List[S3ExpressDirectoryBucketLifecycleConfigurationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]</code> | A lifecycle rule for individual objects in an Amazon S3 Express bucket. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules"></a>

```python
rules: IResolvable | typing.List[S3ExpressDirectoryBucketLifecycleConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]

A lifecycle rule for individual objects in an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#rules S3ExpressDirectoryBucket#rules}

---

### S3ExpressDirectoryBucketLifecycleConfigurationRules <a name="S3ExpressDirectoryBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules(
  abort_incomplete_multipart_upload: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload = None,
  expiration_in_days: typing.Union[int, float] = None,
  id: str = None,
  object_size_greater_than: str = None,
  object_size_less_than: str = None,
  prefix: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan">object_size_greater_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan">object_size_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}. |

---

##### `abort_incomplete_multipart_upload`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#abort_incomplete_multipart_upload S3ExpressDirectoryBucket#abort_incomplete_multipart_upload}

---

##### `expiration_in_days`<sup>Optional</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_size_greater_than`<sup>Optional</sup> <a name="object_size_greater_than" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan"></a>

```python
object_size_greater_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}.

---

##### `object_size_less_than`<sup>Optional</sup> <a name="object_size_less_than" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan"></a>

```python
object_size_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}.

---

### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload(
  days_after_initiation: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload. |

---

##### `days_after_initiation`<sup>Optional</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#days_after_initiation S3ExpressDirectoryBucket#days_after_initiation}

---

### S3ExpressDirectoryBucketMetricsConfigurations <a name="S3ExpressDirectoryBucketMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations(
  access_point_arn: str = None,
  id: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn">access_point_arn</a></code> | <code>str</code> | The access point ARN used when evaluating a metrics filter. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id">id</a></code> | <code>str</code> | The ID used to identify the metrics configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix">prefix</a></code> | <code>str</code> | The prefix used when evaluating a metrics filter. |

---

##### `access_point_arn`<sup>Optional</sup> <a name="access_point_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn"></a>

```python
access_point_arn: str
```

- *Type:* str

The access point ARN used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#access_point_arn S3ExpressDirectoryBucket#access_point_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

The ID used to identify the metrics configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketTags <a name="S3ExpressDirectoryBucketTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ExpressDirectoryBucketBucketEncryptionOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration">put_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration">reset_server_side_encryption_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_side_encryption_configuration` <a name="put_server_side_encryption_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration"></a>

```python
def put_server_side_encryption_configuration(
  value: IResolvable | typing.List[S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]

---

##### `reset_server_side_encryption_configuration` <a name="reset_server_side_encryption_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration"></a>

```python
def reset_server_side_encryption_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput">server_side_encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a>

---

##### `server_side_encryption_configuration_input`<sup>Optional</sup> <a name="server_side_encryption_configuration_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput"></a>

```python
server_side_encryption_configuration_input: IResolvable | typing.List[S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketBucketEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>]

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault">put_server_side_encryption_by_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled">reset_bucket_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault">reset_server_side_encryption_by_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_side_encryption_by_default` <a name="put_server_side_encryption_by_default" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault"></a>

```python
def put_server_side_encryption_by_default(
  kms_master_key_id: str = None,
  sse_algorithm: str = None
) -> None
```

###### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault.parameter.kmsMasterKeyId"></a>

- *Type:* str

AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.

This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#kms_master_key_id S3ExpressDirectoryBucket#kms_master_key_id}

---

###### `sse_algorithm`<sup>Optional</sup> <a name="sse_algorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault.parameter.sseAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}.

---

##### `reset_bucket_key_enabled` <a name="reset_bucket_key_enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled"></a>

```python
def reset_bucket_key_enabled() -> None
```

##### `reset_server_side_encryption_by_default` <a name="reset_server_side_encryption_by_default" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault"></a>

```python
def reset_server_side_encryption_by_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault">server_side_encryption_by_default</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput">bucket_key_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput">server_side_encryption_by_default_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_side_encryption_by_default`<sup>Required</sup> <a name="server_side_encryption_by_default" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault"></a>

```python
server_side_encryption_by_default: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a>

---

##### `bucket_key_enabled_input`<sup>Optional</sup> <a name="bucket_key_enabled_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput"></a>

```python
bucket_key_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `server_side_encryption_by_default_input`<sup>Optional</sup> <a name="server_side_encryption_by_default_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput"></a>

```python
server_side_encryption_by_default_input: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---

##### `bucket_key_enabled`<sup>Required</sup> <a name="bucket_key_enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm">reset_sse_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```

##### `reset_sse_algorithm` <a name="reset_sse_algorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm"></a>

```python
def reset_sse_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput">sse_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `sse_algorithm_input`<sup>Optional</sup> <a name="sse_algorithm_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput"></a>

```python
sse_algorithm_input: str
```

- *Type:* str

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---


### S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId">reset_bucket_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_account_id` <a name="reset_bucket_account_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId"></a>

```python
def reset_bucket_account_id() -> None
```

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput">bucket_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_account_id_input`<sup>Optional</sup> <a name="bucket_account_id_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput"></a>

```python
bucket_account_id_input: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_account_id`<sup>Required</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketInventoryConfigurationsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---


### S3ExpressDirectoryBucketInventoryConfigurationsList <a name="S3ExpressDirectoryBucketInventoryConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ExpressDirectoryBucketInventoryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ExpressDirectoryBucketInventoryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>]

---


### S3ExpressDirectoryBucketInventoryConfigurationsOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions">reset_included_object_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields">reset_optional_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency">reset_schedule_frequency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination"></a>

```python
def put_destination(
  bucket_account_id: str = None,
  bucket_arn: str = None,
  format: str = None,
  prefix: str = None
) -> None
```

###### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.bucketAccountId"></a>

- *Type:* str

The account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_account_id S3ExpressDirectoryBucket#bucket_account_id}

---

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.bucketArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#bucket_arn S3ExpressDirectoryBucket#bucket_arn}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.format"></a>

- *Type:* str

Specifies the file format used when exporting data to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#format S3ExpressDirectoryBucket#format}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.prefix"></a>

- *Type:* str

The prefix to use when exporting data. The prefix is prepended to all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_included_object_versions` <a name="reset_included_object_versions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions"></a>

```python
def reset_included_object_versions() -> None
```

##### `reset_optional_fields` <a name="reset_optional_fields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields"></a>

```python
def reset_optional_fields() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_schedule_frequency` <a name="reset_schedule_frequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency"></a>

```python
def reset_schedule_frequency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput">included_object_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput">optional_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput">schedule_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions">included_object_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields">optional_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency">schedule_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination"></a>

```python
destination: S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | S3ExpressDirectoryBucketInventoryConfigurationsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `included_object_versions_input`<sup>Optional</sup> <a name="included_object_versions_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput"></a>

```python
included_object_versions_input: str
```

- *Type:* str

---

##### `optional_fields_input`<sup>Optional</sup> <a name="optional_fields_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput"></a>

```python
optional_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `schedule_frequency_input`<sup>Optional</sup> <a name="schedule_frequency_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput"></a>

```python
schedule_frequency_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `included_object_versions`<sup>Required</sup> <a name="included_object_versions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions"></a>

```python
included_object_versions: str
```

- *Type:* str

---

##### `optional_fields`<sup>Required</sup> <a name="optional_fields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields"></a>

```python
optional_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `schedule_frequency`<sup>Required</sup> <a name="schedule_frequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency"></a>

```python
schedule_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketInventoryConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[S3ExpressDirectoryBucketLifecycleConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]

---

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules"></a>

```python
rules: S3ExpressDirectoryBucketLifecycleConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[S3ExpressDirectoryBucketLifecycleConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketLifecycleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">reset_days_after_initiation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_after_initiation` <a name="reset_days_after_initiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```python
def reset_days_after_initiation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">days_after_initiation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_initiation_input`<sup>Optional</sup> <a name="days_after_initiation_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```python
days_after_initiation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesList <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ExpressDirectoryBucketLifecycleConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>]

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">put_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">reset_abort_incomplete_multipart_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">reset_expiration_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan">reset_object_size_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan">reset_object_size_less_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort_incomplete_multipart_upload` <a name="put_abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```python
def put_abort_incomplete_multipart_upload(
  days_after_initiation: typing.Union[int, float] = None
) -> None
```

###### `days_after_initiation`<sup>Optional</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.daysAfterInitiation"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3express_directory_bucket#days_after_initiation S3ExpressDirectoryBucket#days_after_initiation}

---

##### `reset_abort_incomplete_multipart_upload` <a name="reset_abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```python
def reset_abort_incomplete_multipart_upload() -> None
```

##### `reset_expiration_in_days` <a name="reset_expiration_in_days" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```python
def reset_expiration_in_days() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object_size_greater_than` <a name="reset_object_size_greater_than" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan"></a>

```python
def reset_object_size_greater_than() -> None
```

##### `reset_object_size_less_than` <a name="reset_object_size_less_than" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan"></a>

```python
def reset_object_size_less_than() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">abort_incomplete_multipart_upload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">expiration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput">object_size_greater_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput">object_size_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan">object_size_greater_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan">object_size_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload`<sup>Required</sup> <a name="abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `abort_incomplete_multipart_upload_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```python
abort_incomplete_multipart_upload_input: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `expiration_in_days_input`<sup>Optional</sup> <a name="expiration_in_days_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```python
expiration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_size_greater_than_input`<sup>Optional</sup> <a name="object_size_greater_than_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput"></a>

```python
object_size_greater_than_input: str
```

- *Type:* str

---

##### `object_size_less_than_input`<sup>Optional</sup> <a name="object_size_less_than_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput"></a>

```python
object_size_less_than_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `expiration_in_days`<sup>Required</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_size_greater_than`<sup>Required</sup> <a name="object_size_greater_than" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan"></a>

```python
object_size_greater_than: str
```

- *Type:* str

---

##### `object_size_less_than`<sup>Required</sup> <a name="object_size_less_than" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan"></a>

```python
object_size_less_than: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>

---


### S3ExpressDirectoryBucketMetricsConfigurationsList <a name="S3ExpressDirectoryBucketMetricsConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ExpressDirectoryBucketMetricsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ExpressDirectoryBucketMetricsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>]

---


### S3ExpressDirectoryBucketMetricsConfigurationsOutputReference <a name="S3ExpressDirectoryBucketMetricsConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn">reset_access_point_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_point_arn` <a name="reset_access_point_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn"></a>

```python
def reset_access_point_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput">access_point_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn">access_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_point_arn_input`<sup>Optional</sup> <a name="access_point_arn_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput"></a>

```python
access_point_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `access_point_arn`<sup>Required</sup> <a name="access_point_arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn"></a>

```python
access_point_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketMetricsConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>

---


### S3ExpressDirectoryBucketTagsList <a name="S3ExpressDirectoryBucketTagsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ExpressDirectoryBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ExpressDirectoryBucketTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>]

---


### S3ExpressDirectoryBucketTagsOutputReference <a name="S3ExpressDirectoryBucketTagsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_directory_bucket

s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressDirectoryBucketTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>

---



