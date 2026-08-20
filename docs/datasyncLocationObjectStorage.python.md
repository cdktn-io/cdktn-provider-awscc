# `datasyncLocationObjectStorage` Submodule <a name="`datasyncLocationObjectStorage` Submodule" id="@cdktn/provider-awscc.datasyncLocationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationObjectStorage <a name="DatasyncLocationObjectStorage" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage awscc_datasync_location_object_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_key: str = None,
  agent_arns: typing.List[str] = None,
  bucket_name: str = None,
  cmk_secret_config: DatasyncLocationObjectStorageCmkSecretConfig = None,
  custom_secret_config: DatasyncLocationObjectStorageCustomSecretConfig = None,
  secret_key: str = None,
  server_certificate: str = None,
  server_hostname: str = None,
  server_port: typing.Union[int, float] = None,
  server_protocol: str = None,
  subdirectory: str = None,
  tags: IResolvable | typing.List[DatasyncLocationObjectStorageTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | Optional. The access key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The name of the bucket on the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | Optional. The secret key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverCertificate">server_certificate</a></code> | <code>str</code> | X.509 PEM content containing a certificate authority or chain to trust. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverHostname">server_hostname</a></code> | <code>str</code> | The name of the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | The port that your self-managed server accepts inbound network traffic on. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverProtocol">server_protocol</a></code> | <code>str</code> | The protocol that the object storage server uses to communicate. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>str</code> | The subdirectory in the self-managed object storage server that is used to read data from. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.accessKey"></a>

- *Type:* str

Optional. The access key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}

---

##### `agent_arns`<sup>Optional</sup> <a name="agent_arns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.agentArns"></a>

- *Type:* typing.List[str]

Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.bucketName"></a>

- *Type:* str

The name of the bucket on the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}

---

##### `cmk_secret_config`<sup>Optional</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.cmkSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#cmk_secret_config DatasyncLocationObjectStorage#cmk_secret_config}

---

##### `custom_secret_config`<sup>Optional</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.customSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#custom_secret_config DatasyncLocationObjectStorage#custom_secret_config}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.secretKey"></a>

- *Type:* str

Optional. The secret key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}

---

##### `server_certificate`<sup>Optional</sup> <a name="server_certificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverCertificate"></a>

- *Type:* str

X.509 PEM content containing a certificate authority or chain to trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}

---

##### `server_hostname`<sup>Optional</sup> <a name="server_hostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverHostname"></a>

- *Type:* str

The name of the self-managed object storage server.

This value is the IP address or Domain Name Service (DNS) name of the object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}

---

##### `server_port`<sup>Optional</sup> <a name="server_port" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverPort"></a>

- *Type:* typing.Union[int, float]

The port that your self-managed server accepts inbound network traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}

---

##### `server_protocol`<sup>Optional</sup> <a name="server_protocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.serverProtocol"></a>

- *Type:* str

The protocol that the object storage server uses to communicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.subdirectory"></a>

- *Type:* str

The subdirectory in the self-managed object storage server that is used to read data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig">put_cmk_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig">put_custom_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns">reset_agent_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig">reset_cmk_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig">reset_custom_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate">reset_server_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname">reset_server_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort">reset_server_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol">reset_server_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory">reset_subdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cmk_secret_config` <a name="put_cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig"></a>

```python
def put_cmk_secret_config(
  kms_key_arn: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig.parameter.kmsKeyArn"></a>

- *Type:* str

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#kms_key_arn DatasyncLocationObjectStorage#kms_key_arn}

---

##### `put_custom_secret_config` <a name="put_custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig"></a>

```python
def put_custom_secret_config(
  secret_access_role_arn: str = None,
  secret_arn: str = None
) -> None
```

###### `secret_access_role_arn`<sup>Optional</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig.parameter.secretAccessRoleArn"></a>

- *Type:* str

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#secret_access_role_arn DatasyncLocationObjectStorage#secret_access_role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig.parameter.secretArn"></a>

- *Type:* str

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#secret_arn DatasyncLocationObjectStorage#secret_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatasyncLocationObjectStorageTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]

---

##### `reset_access_key` <a name="reset_access_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_agent_arns` <a name="reset_agent_arns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns"></a>

```python
def reset_agent_arns() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_cmk_secret_config` <a name="reset_cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig"></a>

```python
def reset_cmk_secret_config() -> None
```

##### `reset_custom_secret_config` <a name="reset_custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig"></a>

```python
def reset_custom_secret_config() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_server_certificate` <a name="reset_server_certificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate"></a>

```python
def reset_server_certificate() -> None
```

##### `reset_server_hostname` <a name="reset_server_hostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname"></a>

```python
def reset_server_hostname() -> None
```

##### `reset_server_port` <a name="reset_server_port" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort"></a>

```python
def reset_server_port() -> None
```

##### `reset_server_protocol` <a name="reset_server_protocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol"></a>

```python
def reset_server_protocol() -> None
```

##### `reset_subdirectory` <a name="reset_subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory"></a>

```python
def reset_subdirectory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasyncLocationObjectStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasyncLocationObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig">managed_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput">agent_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput">cmk_secret_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput">custom_secret_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput">server_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput">server_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput">server_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput">server_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate">server_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname">server_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol">server_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cmk_secret_config`<sup>Required</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig"></a>

```python
cmk_secret_config: DatasyncLocationObjectStorageCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a>

---

##### `custom_secret_config`<sup>Required</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig"></a>

```python
custom_secret_config: DatasyncLocationObjectStorageCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `managed_secret_config`<sup>Required</sup> <a name="managed_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig"></a>

```python
managed_secret_config: DatasyncLocationObjectStorageManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags"></a>

```python
tags: DatasyncLocationObjectStorageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a>

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `agent_arns_input`<sup>Optional</sup> <a name="agent_arns_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput"></a>

```python
agent_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `cmk_secret_config_input`<sup>Optional</sup> <a name="cmk_secret_config_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput"></a>

```python
cmk_secret_config_input: IResolvable | DatasyncLocationObjectStorageCmkSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---

##### `custom_secret_config_input`<sup>Optional</sup> <a name="custom_secret_config_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput"></a>

```python
custom_secret_config_input: IResolvable | DatasyncLocationObjectStorageCustomSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `server_certificate_input`<sup>Optional</sup> <a name="server_certificate_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput"></a>

```python
server_certificate_input: str
```

- *Type:* str

---

##### `server_hostname_input`<sup>Optional</sup> <a name="server_hostname_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput"></a>

```python
server_hostname_input: str
```

- *Type:* str

---

##### `server_port_input`<sup>Optional</sup> <a name="server_port_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput"></a>

```python
server_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_protocol_input`<sup>Optional</sup> <a name="server_protocol_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput"></a>

```python
server_protocol_input: str
```

- *Type:* str

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatasyncLocationObjectStorageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `server_certificate`<sup>Required</sup> <a name="server_certificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate"></a>

```python
server_certificate: str
```

- *Type:* str

---

##### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname"></a>

```python
server_hostname: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationObjectStorageCmkSecretConfig <a name="DatasyncLocationObjectStorageCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig(
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#kms_key_arn DatasyncLocationObjectStorage#kms_key_arn}

---

### DatasyncLocationObjectStorageConfig <a name="DatasyncLocationObjectStorageConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_key: str = None,
  agent_arns: typing.List[str] = None,
  bucket_name: str = None,
  cmk_secret_config: DatasyncLocationObjectStorageCmkSecretConfig = None,
  custom_secret_config: DatasyncLocationObjectStorageCustomSecretConfig = None,
  secret_key: str = None,
  server_certificate: str = None,
  server_hostname: str = None,
  server_port: typing.Union[int, float] = None,
  server_protocol: str = None,
  subdirectory: str = None,
  tags: IResolvable | typing.List[DatasyncLocationObjectStorageTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey">access_key</a></code> | <code>str</code> | Optional. The access key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the bucket on the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey">secret_key</a></code> | <code>str</code> | Optional. The secret key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate">server_certificate</a></code> | <code>str</code> | X.509 PEM content containing a certificate authority or chain to trust. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname">server_hostname</a></code> | <code>str</code> | The name of the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | The port that your self-managed server accepts inbound network traffic on. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol">server_protocol</a></code> | <code>str</code> | The protocol that the object storage server uses to communicate. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory">subdirectory</a></code> | <code>str</code> | The subdirectory in the self-managed object storage server that is used to read data from. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

Optional. The access key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}

---

##### `agent_arns`<sup>Optional</sup> <a name="agent_arns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the bucket on the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}

---

##### `cmk_secret_config`<sup>Optional</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig"></a>

```python
cmk_secret_config: DatasyncLocationObjectStorageCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#cmk_secret_config DatasyncLocationObjectStorage#cmk_secret_config}

---

##### `custom_secret_config`<sup>Optional</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig"></a>

```python
custom_secret_config: DatasyncLocationObjectStorageCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#custom_secret_config DatasyncLocationObjectStorage#custom_secret_config}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

Optional. The secret key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}

---

##### `server_certificate`<sup>Optional</sup> <a name="server_certificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate"></a>

```python
server_certificate: str
```

- *Type:* str

X.509 PEM content containing a certificate authority or chain to trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}

---

##### `server_hostname`<sup>Optional</sup> <a name="server_hostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname"></a>

```python
server_hostname: str
```

- *Type:* str

The name of the self-managed object storage server.

This value is the IP address or Domain Name Service (DNS) name of the object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}

---

##### `server_port`<sup>Optional</sup> <a name="server_port" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that your self-managed server accepts inbound network traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}

---

##### `server_protocol`<sup>Optional</sup> <a name="server_protocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

The protocol that the object storage server uses to communicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

The subdirectory in the self-managed object storage server that is used to read data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatasyncLocationObjectStorageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}

---

### DatasyncLocationObjectStorageCustomSecretConfig <a name="DatasyncLocationObjectStorageCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig(
  secret_access_role_arn: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn">secret_access_role_arn</a></code> | <code>str</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secret_access_role_arn`<sup>Optional</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn"></a>

```python
secret_access_role_arn: str
```

- *Type:* str

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#secret_access_role_arn DatasyncLocationObjectStorage#secret_access_role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#secret_arn DatasyncLocationObjectStorage#secret_arn}

---

### DatasyncLocationObjectStorageManagedSecretConfig <a name="DatasyncLocationObjectStorageManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig()
```


### DatasyncLocationObjectStorageTags <a name="DatasyncLocationObjectStorageTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key">key</a></code> | <code>str</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value">value</a></code> | <code>str</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#key DatasyncLocationObjectStorage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_object_storage#value DatasyncLocationObjectStorage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationObjectStorageCmkSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationObjectStorageCmkSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---


### DatasyncLocationObjectStorageCustomSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn">reset_secret_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_access_role_arn` <a name="reset_secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```python
def reset_secret_access_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secret_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn">secret_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_role_arn_input`<sup>Optional</sup> <a name="secret_access_role_arn_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```python
secret_access_role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_access_role_arn`<sup>Required</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```python
secret_access_role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationObjectStorageCustomSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---


### DatasyncLocationObjectStorageManagedSecretConfigOutputReference <a name="DatasyncLocationObjectStorageManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncLocationObjectStorageManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a>

---


### DatasyncLocationObjectStorageTagsList <a name="DatasyncLocationObjectStorageTagsList" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncLocationObjectStorageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncLocationObjectStorageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>]

---


### DatasyncLocationObjectStorageTagsOutputReference <a name="DatasyncLocationObjectStorageTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_object_storage

datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationObjectStorageTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags">DatasyncLocationObjectStorageTags</a>

---



