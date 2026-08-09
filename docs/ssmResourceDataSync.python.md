# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktn/provider-awscc.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  sync_name: str,
  bucket_name: str = None,
  bucket_prefix: str = None,
  bucket_region: str = None,
  kms_key_arn: str = None,
  s3_destination: SsmResourceDataSyncS3Destination = None,
  sync_format: str = None,
  sync_source: SsmResourceDataSyncSyncSource = None,
  sync_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncName">sync_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.bucketRegion">bucket_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncFormat">sync_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncSource">sync_source</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncType">sync_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `sync_name`<sup>Required</sup> <a name="sync_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.bucketRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}.

---

##### `sync_format`<sup>Optional</sup> <a name="sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `sync_source`<sup>Optional</sup> <a name="sync_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}.

---

##### `sync_type`<sup>Optional</sup> <a name="sync_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.syncType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource">put_sync_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion">reset_bucket_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination">reset_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat">reset_sync_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource">reset_sync_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType">reset_sync_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```python
def put_s3_destination(
  bucket_name: str = None,
  bucket_prefix: str = None,
  bucket_region: str = None,
  kms_key_arn: str = None,
  sync_format: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

###### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

###### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.bucketRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

###### `sync_format`<sup>Optional</sup> <a name="sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.syncFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `put_sync_source` <a name="put_sync_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource"></a>

```python
def put_sync_source(
  aws_organizations_source: SsmResourceDataSyncSyncSourceAwsOrganizationsSource = None,
  include_future_regions: bool | IResolvable = None,
  source_regions: typing.List[str] = None,
  source_type: str = None
) -> None
```

###### `aws_organizations_source`<sup>Optional</sup> <a name="aws_organizations_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.awsOrganizationsSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}.

---

###### `include_future_regions`<sup>Optional</sup> <a name="include_future_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.includeFutureRegions"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}.

---

###### `source_regions`<sup>Optional</sup> <a name="source_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.sourceRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}.

---

###### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}.

---

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_bucket_region` <a name="reset_bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion"></a>

```python
def reset_bucket_region() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```

##### `reset_sync_format` <a name="reset_sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat"></a>

```python
def reset_sync_format() -> None
```

##### `reset_sync_source` <a name="reset_sync_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource"></a>

```python
def reset_sync_source() -> None
```

##### `reset_sync_type` <a name="reset_sync_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType"></a>

```python
def reset_sync_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmResourceDataSync to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource">sync_source</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput">bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">s3_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput">sync_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput">sync_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput">sync_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput">sync_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat">sync_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName">sync_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType">sync_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```python
s3_destination: SsmResourceDataSyncS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `sync_source`<sup>Required</sup> <a name="sync_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource"></a>

```python
sync_source: SsmResourceDataSyncSyncSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `bucket_region_input`<sup>Optional</sup> <a name="bucket_region_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput"></a>

```python
bucket_region_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```python
s3_destination_input: IResolvable | SsmResourceDataSyncS3Destination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `sync_format_input`<sup>Optional</sup> <a name="sync_format_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput"></a>

```python
sync_format_input: str
```

- *Type:* str

---

##### `sync_name_input`<sup>Optional</sup> <a name="sync_name_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput"></a>

```python
sync_name_input: str
```

- *Type:* str

---

##### `sync_source_input`<sup>Optional</sup> <a name="sync_source_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput"></a>

```python
sync_source_input: IResolvable | SsmResourceDataSyncSyncSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---

##### `sync_type_input`<sup>Optional</sup> <a name="sync_type_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput"></a>

```python
sync_type_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `sync_format`<sup>Required</sup> <a name="sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat"></a>

```python
sync_format: str
```

- *Type:* str

---

##### `sync_name`<sup>Required</sup> <a name="sync_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName"></a>

```python
sync_name: str
```

- *Type:* str

---

##### `sync_type`<sup>Required</sup> <a name="sync_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType"></a>

```python
sync_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  sync_name: str,
  bucket_name: str = None,
  bucket_prefix: str = None,
  bucket_region: str = None,
  kms_key_arn: str = None,
  s3_destination: SsmResourceDataSyncS3Destination = None,
  sync_format: str = None,
  sync_source: SsmResourceDataSyncSyncSource = None,
  sync_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName">sync_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion">bucket_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat">sync_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource">sync_source</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType">sync_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `sync_name`<sup>Required</sup> <a name="sync_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName"></a>

```python
sync_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```python
s3_destination: SsmResourceDataSyncS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}.

---

##### `sync_format`<sup>Optional</sup> <a name="sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat"></a>

```python
sync_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `sync_source`<sup>Optional</sup> <a name="sync_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource"></a>

```python
sync_source: SsmResourceDataSyncSyncSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}.

---

##### `sync_type`<sup>Optional</sup> <a name="sync_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType"></a>

```python
sync_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}.

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncS3Destination(
  bucket_name: str = None,
  bucket_prefix: str = None,
  bucket_region: str = None,
  kms_key_arn: str = None,
  sync_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion">bucket_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">sync_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `sync_format`<sup>Optional</sup> <a name="sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```python
sync_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

### SsmResourceDataSyncSyncSource <a name="SsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncSyncSource(
  aws_organizations_source: SsmResourceDataSyncSyncSourceAwsOrganizationsSource = None,
  include_future_regions: bool | IResolvable = None,
  source_regions: typing.List[str] = None,
  source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource">aws_organizations_source</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions">include_future_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions">source_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}. |

---

##### `aws_organizations_source`<sup>Optional</sup> <a name="aws_organizations_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource"></a>

```python
aws_organizations_source: SsmResourceDataSyncSyncSourceAwsOrganizationsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}.

---

##### `include_future_regions`<sup>Optional</sup> <a name="include_future_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions"></a>

```python
include_future_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}.

---

##### `source_regions`<sup>Optional</sup> <a name="source_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions"></a>

```python
source_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}.

---

### SsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource(
  organizational_units: typing.List[str] = None,
  organization_source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType">organization_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}. |

---

##### `organizational_units`<sup>Optional</sup> <a name="organizational_units" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}.

---

##### `organization_source_type`<sup>Optional</sup> <a name="organization_source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType"></a>

```python
organization_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion">reset_bucket_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">reset_sync_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_bucket_region` <a name="reset_bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion"></a>

```python
def reset_bucket_region() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_sync_format` <a name="reset_sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```python
def reset_sync_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput">bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">sync_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">sync_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `bucket_region_input`<sup>Optional</sup> <a name="bucket_region_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput"></a>

```python
bucket_region_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `sync_format_input`<sup>Optional</sup> <a name="sync_format_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```python
sync_format_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `sync_format`<sup>Required</sup> <a name="sync_format" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```python
sync_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmResourceDataSyncS3Destination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---


### SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits">reset_organizational_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType">reset_organization_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_organizational_units` <a name="reset_organizational_units" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits"></a>

```python
def reset_organizational_units() -> None
```

##### `reset_organization_source_type` <a name="reset_organization_source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType"></a>

```python
def reset_organization_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput">organizational_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput">organization_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">organization_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organizational_units_input`<sup>Optional</sup> <a name="organizational_units_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput"></a>

```python
organizational_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_source_type_input`<sup>Optional</sup> <a name="organization_source_type_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput"></a>

```python
organization_source_type_input: str
```

- *Type:* str

---

##### `organizational_units`<sup>Required</sup> <a name="organizational_units" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_source_type`<sup>Required</sup> <a name="organization_source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```python
organization_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmResourceDataSyncSyncSourceAwsOrganizationsSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---


### SsmResourceDataSyncSyncSourceOutputReference <a name="SsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource">put_aws_organizations_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource">reset_aws_organizations_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions">reset_include_future_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions">reset_source_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType">reset_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_organizations_source` <a name="put_aws_organizations_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource"></a>

```python
def put_aws_organizations_source(
  organizational_units: typing.List[str] = None,
  organization_source_type: str = None
) -> None
```

###### `organizational_units`<sup>Optional</sup> <a name="organizational_units" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource.parameter.organizationalUnits"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}.

---

###### `organization_source_type`<sup>Optional</sup> <a name="organization_source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource.parameter.organizationSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}.

---

##### `reset_aws_organizations_source` <a name="reset_aws_organizations_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource"></a>

```python
def reset_aws_organizations_source() -> None
```

##### `reset_include_future_regions` <a name="reset_include_future_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions"></a>

```python
def reset_include_future_regions() -> None
```

##### `reset_source_regions` <a name="reset_source_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions"></a>

```python
def reset_source_regions() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType"></a>

```python
def reset_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">aws_organizations_source</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput">aws_organizations_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput">include_future_regions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput">source_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">include_future_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">source_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_organizations_source`<sup>Required</sup> <a name="aws_organizations_source" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```python
aws_organizations_source: SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `aws_organizations_source_input`<sup>Optional</sup> <a name="aws_organizations_source_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput"></a>

```python
aws_organizations_source_input: IResolvable | SsmResourceDataSyncSyncSourceAwsOrganizationsSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---

##### `include_future_regions_input`<sup>Optional</sup> <a name="include_future_regions_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput"></a>

```python
include_future_regions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_regions_input`<sup>Optional</sup> <a name="source_regions_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput"></a>

```python
source_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `include_future_regions`<sup>Required</sup> <a name="include_future_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```python
include_future_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_regions`<sup>Required</sup> <a name="source_regions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```python
source_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmResourceDataSyncSyncSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---



