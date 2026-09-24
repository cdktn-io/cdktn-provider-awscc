# `storagegatewayTape` Submodule <a name="`storagegatewayTape` Submodule" id="@cdktn/provider-awscc.storagegatewayTape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayTape <a name="StoragegatewayTape" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape awscc_storagegateway_tape}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTape(
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
  tape_size_in_bytes: typing.Union[int, float],
  kms_encrypted: bool | IResolvable = None,
  kms_key: str = None,
  pool_id: str = None,
  tags: IResolvable | typing.List[StoragegatewayTapeTags] = None,
  tape_barcode: str = None,
  worm: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.tapeSizeInBytes">tape_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | The size, in bytes, of the virtual tape that you want to create. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | The ID of the pool that you want to add your tape to for archiving. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]</code> | A list of up to 50 tags to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.tapeBarcode">tape_barcode</a></code> | <code>str</code> | The barcode that you want to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.worm">worm</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to create a write-once-read-many (WORM) virtual tape. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.gatewayArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#gateway_arn StoragegatewayTape#gateway_arn}

---

##### `tape_size_in_bytes`<sup>Required</sup> <a name="tape_size_in_bytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.tapeSizeInBytes"></a>

- *Type:* typing.Union[int, float]

The size, in bytes, of the virtual tape that you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tape_size_in_bytes StoragegatewayTape#tape_size_in_bytes}

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.kmsEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#kms_encrypted StoragegatewayTape#kms_encrypted}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.kmsKey"></a>

- *Type:* str

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

This value must be set if KMSEncrypted is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#kms_key StoragegatewayTape#kms_key}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.poolId"></a>

- *Type:* str

The ID of the pool that you want to add your tape to for archiving.

Tapes in this pool are archived in the S3 storage class that is associated with the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#pool_id StoragegatewayTape#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]

A list of up to 50 tags to assign to the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tags StoragegatewayTape#tags}

---

##### `tape_barcode`<sup>Optional</sup> <a name="tape_barcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.tapeBarcode"></a>

- *Type:* str

The barcode that you want to assign to the virtual tape.

Barcodes cannot be reused, even after a tape is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tape_barcode StoragegatewayTape#tape_barcode}

---

##### `worm`<sup>Optional</sup> <a name="worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.worm"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to create a write-once-read-many (WORM) virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#worm StoragegatewayTape#worm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted">reset_kms_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId">reset_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode">reset_tape_barcode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm">reset_worm</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[StoragegatewayTapeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]

---

##### `reset_kms_encrypted` <a name="reset_kms_encrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted"></a>

```python
def reset_kms_encrypted() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_pool_id` <a name="reset_pool_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId"></a>

```python
def reset_pool_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tape_barcode` <a name="reset_tape_barcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode"></a>

```python
def reset_tape_barcode() -> None
```

##### `reset_worm` <a name="reset_worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm"></a>

```python
def reset_worm() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTape.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTape.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTape.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTape.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StoragegatewayTape to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StoragegatewayTape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayTape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn">tape_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate">tape_created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus">tape_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes">tape_used_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput">kms_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput">tape_barcode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput">tape_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput">worm_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode">tape_barcode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes">tape_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm">worm</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags"></a>

```python
tags: StoragegatewayTapeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a>

---

##### `tape_arn`<sup>Required</sup> <a name="tape_arn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn"></a>

```python
tape_arn: str
```

- *Type:* str

---

##### `tape_created_date`<sup>Required</sup> <a name="tape_created_date" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate"></a>

```python
tape_created_date: str
```

- *Type:* str

---

##### `tape_status`<sup>Required</sup> <a name="tape_status" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus"></a>

```python
tape_status: str
```

- *Type:* str

---

##### `tape_used_in_bytes`<sup>Required</sup> <a name="tape_used_in_bytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes"></a>

```python
tape_used_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `kms_encrypted_input`<sup>Optional</sup> <a name="kms_encrypted_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput"></a>

```python
kms_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[StoragegatewayTapeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]

---

##### `tape_barcode_input`<sup>Optional</sup> <a name="tape_barcode_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput"></a>

```python
tape_barcode_input: str
```

- *Type:* str

---

##### `tape_size_in_bytes_input`<sup>Optional</sup> <a name="tape_size_in_bytes_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput"></a>

```python
tape_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worm_input`<sup>Optional</sup> <a name="worm_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput"></a>

```python
worm_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted"></a>

```python
kms_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `tape_barcode`<sup>Required</sup> <a name="tape_barcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode"></a>

```python
tape_barcode: str
```

- *Type:* str

---

##### `tape_size_in_bytes`<sup>Required</sup> <a name="tape_size_in_bytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes"></a>

```python
tape_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worm`<sup>Required</sup> <a name="worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm"></a>

```python
worm: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayTapeConfig <a name="StoragegatewayTapeConfig" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTapeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_arn: str,
  tape_size_in_bytes: typing.Union[int, float],
  kms_encrypted: bool | IResolvable = None,
  kms_key: str = None,
  pool_id: str = None,
  tags: IResolvable | typing.List[StoragegatewayTapeTags] = None,
  tape_barcode: str = None,
  worm: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes">tape_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | The size, in bytes, of the virtual tape that you want to create. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId">pool_id</a></code> | <code>str</code> | The ID of the pool that you want to add your tape to for archiving. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]</code> | A list of up to 50 tags to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode">tape_barcode</a></code> | <code>str</code> | The barcode that you want to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm">worm</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to create a write-once-read-many (WORM) virtual tape. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#gateway_arn StoragegatewayTape#gateway_arn}

---

##### `tape_size_in_bytes`<sup>Required</sup> <a name="tape_size_in_bytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes"></a>

```python
tape_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size, in bytes, of the virtual tape that you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tape_size_in_bytes StoragegatewayTape#tape_size_in_bytes}

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted"></a>

```python
kms_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#kms_encrypted StoragegatewayTape#kms_encrypted}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

This value must be set if KMSEncrypted is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#kms_key StoragegatewayTape#kms_key}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

The ID of the pool that you want to add your tape to for archiving.

Tapes in this pool are archived in the S3 storage class that is associated with the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#pool_id StoragegatewayTape#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[StoragegatewayTapeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]

A list of up to 50 tags to assign to the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tags StoragegatewayTape#tags}

---

##### `tape_barcode`<sup>Optional</sup> <a name="tape_barcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode"></a>

```python
tape_barcode: str
```

- *Type:* str

The barcode that you want to assign to the virtual tape.

Barcodes cannot be reused, even after a tape is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tape_barcode StoragegatewayTape#tape_barcode}

---

##### `worm`<sup>Optional</sup> <a name="worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm"></a>

```python
worm: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to create a write-once-read-many (WORM) virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#worm StoragegatewayTape#worm}

---

### StoragegatewayTapeTags <a name="StoragegatewayTapeTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTapeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key">key</a></code> | <code>str</code> | The tag key. Cannot be prefixed with aws:. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key. Cannot be prefixed with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#key StoragegatewayTape#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#value StoragegatewayTape#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayTapeTagsList <a name="StoragegatewayTapeTagsList" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTapeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StoragegatewayTapeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StoragegatewayTapeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>]

---


### StoragegatewayTapeTagsOutputReference <a name="StoragegatewayTapeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_tape

storagegatewayTape.StoragegatewayTapeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StoragegatewayTapeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>

---



