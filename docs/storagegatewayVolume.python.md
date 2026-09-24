# `storagegatewayVolume` Submodule <a name="`storagegatewayVolume` Submodule" id="@cdktn/provider-awscc.storagegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayVolume <a name="StoragegatewayVolume" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolume(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_arn: str,
  network_interface_id: str,
  target_name: str,
  volume_size_in_bytes: typing.Union[int, float],
  kms_encrypted: bool | IResolvable = None,
  kms_key: str = None,
  snapshot_id: str = None,
  source_volume_arn: str = None,
  tags: IResolvable | typing.List[StoragegatewayVolumeTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the gateway on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.targetName">target_name</a></code> | <code>str</code> | The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | The size of the volume in bytes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | The ARN of an existing volume from which to create the new volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]</code> | A list of up to 50 tags to assign to the volume. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.gatewayArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the gateway on which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn StoragegatewayVolume#gateway_arn}

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id StoragegatewayVolume#network_interface_id}

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.targetName"></a>

- *Type:* str

The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name StoragegatewayVolume#target_name}

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.volumeSizeInBytes"></a>

- *Type:* typing.Union[int, float]

The size of the volume in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes StoragegatewayVolume#volume_size_in_bytes}

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted StoragegatewayVolume#kms_encrypted}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.kmsKey"></a>

- *Type:* str

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key StoragegatewayVolume#kms_key}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.snapshotId"></a>

- *Type:* str

The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id StoragegatewayVolume#snapshot_id}

---

##### `source_volume_arn`<sup>Optional</sup> <a name="source_volume_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.sourceVolumeArn"></a>

- *Type:* str

The ARN of an existing volume from which to create the new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn StoragegatewayVolume#source_volume_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]

A list of up to 50 tags to assign to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags StoragegatewayVolume#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted">reset_kms_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn">reset_source_volume_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[StoragegatewayVolumeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]

---

##### `reset_kms_encrypted` <a name="reset_kms_encrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted"></a>

```python
def reset_kms_encrypted() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_source_volume_arn` <a name="reset_source_volume_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn"></a>

```python
def reset_source_volume_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StoragegatewayVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn">volume_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus">volume_attachment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus">volume_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes">volume_used_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput">kms_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput">source_volume_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput">volume_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags"></a>

```python
tags: StoragegatewayVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a>

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `volume_arn`<sup>Required</sup> <a name="volume_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn"></a>

```python
volume_arn: str
```

- *Type:* str

---

##### `volume_attachment_status`<sup>Required</sup> <a name="volume_attachment_status" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus"></a>

```python
volume_attachment_status: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_status`<sup>Required</sup> <a name="volume_status" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus"></a>

```python
volume_status: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `volume_used_in_bytes`<sup>Required</sup> <a name="volume_used_in_bytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes"></a>

```python
volume_used_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `kms_encrypted_input`<sup>Optional</sup> <a name="kms_encrypted_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput"></a>

```python
kms_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `source_volume_arn_input`<sup>Optional</sup> <a name="source_volume_arn_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput"></a>

```python
source_volume_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[StoragegatewayVolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `volume_size_in_bytes_input`<sup>Optional</sup> <a name="volume_size_in_bytes_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput"></a>

```python
volume_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted"></a>

```python
kms_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `source_volume_arn`<sup>Required</sup> <a name="source_volume_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn"></a>

```python
source_volume_arn: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes"></a>

```python
volume_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayVolumeConfig <a name="StoragegatewayVolumeConfig" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolumeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_arn: str,
  network_interface_id: str,
  target_name: str,
  volume_size_in_bytes: typing.Union[int, float],
  kms_encrypted: bool | IResolvable = None,
  kms_key: str = None,
  snapshot_id: str = None,
  source_volume_arn: str = None,
  tags: IResolvable | typing.List[StoragegatewayVolumeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the gateway on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName">target_name</a></code> | <code>str</code> | The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | The size of the volume in bytes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | The ARN of an existing volume from which to create the new volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]</code> | A list of up to 50 tags to assign to the volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the gateway on which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn StoragegatewayVolume#gateway_arn}

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id StoragegatewayVolume#network_interface_id}

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name StoragegatewayVolume#target_name}

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes"></a>

```python
volume_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the volume in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes StoragegatewayVolume#volume_size_in_bytes}

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted"></a>

```python
kms_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted StoragegatewayVolume#kms_encrypted}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key StoragegatewayVolume#kms_key}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id StoragegatewayVolume#snapshot_id}

---

##### `source_volume_arn`<sup>Optional</sup> <a name="source_volume_arn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn"></a>

```python
source_volume_arn: str
```

- *Type:* str

The ARN of an existing volume from which to create the new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn StoragegatewayVolume#source_volume_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[StoragegatewayVolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]

A list of up to 50 tags to assign to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags StoragegatewayVolume#tags}

---

### StoragegatewayVolumeTags <a name="StoragegatewayVolumeTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolumeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#key StoragegatewayVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#value StoragegatewayVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayVolumeTagsList <a name="StoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolumeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StoragegatewayVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StoragegatewayVolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>]

---


### StoragegatewayVolumeTagsOutputReference <a name="StoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_volume

storagegatewayVolume.StoragegatewayVolumeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StoragegatewayVolumeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>

---



