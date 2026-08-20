# `elasticloadbalancingv2TrustStore` Submodule <a name="`elasticloadbalancingv2TrustStore` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TrustStore <a name="Elasticloadbalancingv2TrustStore" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ca_certificates_bundle_s3_bucket: str = None,
  ca_certificates_bundle_s3_key: str = None,
  ca_certificates_bundle_s3_object_version: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2TrustStoreTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Bucket">ca_certificates_bundle_s3_bucket</a></code> | <code>str</code> | The name of the S3 bucket to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Key">ca_certificates_bundle_s3_key</a></code> | <code>str</code> | The name of the S3 object to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3ObjectVersion">ca_certificates_bundle_s3_object_version</a></code> | <code>str</code> | The version of the S3 bucket that contains the CA certificate bundle. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the trust store. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]</code> | The tags to assign to the trust store. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_certificates_bundle_s3_bucket`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Bucket"></a>

- *Type:* str

The name of the S3 bucket to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_bucket}

---

##### `ca_certificates_bundle_s3_key`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3Key"></a>

- *Type:* str

The name of the S3 object to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_key}

---

##### `ca_certificates_bundle_s3_object_version`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_object_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.caCertificatesBundleS3ObjectVersion"></a>

- *Type:* str

The version of the S3 bucket that contains the CA certificate bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_object_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.name"></a>

- *Type:* str

The name of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#name Elasticloadbalancingv2TrustStore#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]

The tags to assign to the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#tags Elasticloadbalancingv2TrustStore#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket">reset_ca_certificates_bundle_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key">reset_ca_certificates_bundle_s3_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion">reset_ca_certificates_bundle_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Elasticloadbalancingv2TrustStoreTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]

---

##### `reset_ca_certificates_bundle_s3_bucket` <a name="reset_ca_certificates_bundle_s3_bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket"></a>

```python
def reset_ca_certificates_bundle_s3_bucket() -> None
```

##### `reset_ca_certificates_bundle_s3_key` <a name="reset_ca_certificates_bundle_s3_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key"></a>

```python
def reset_ca_certificates_bundle_s3_key() -> None
```

##### `reset_ca_certificates_bundle_s3_object_version` <a name="reset_ca_certificates_bundle_s3_object_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion"></a>

```python
def reset_ca_certificates_bundle_s3_object_version() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Elasticloadbalancingv2TrustStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Elasticloadbalancingv2TrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates">number_of_ca_certificates</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput">ca_certificates_bundle_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput">ca_certificates_bundle_s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput">ca_certificates_bundle_s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket">ca_certificates_bundle_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key">ca_certificates_bundle_s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion">ca_certificates_bundle_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `number_of_ca_certificates`<sup>Required</sup> <a name="number_of_ca_certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates"></a>

```python
number_of_ca_certificates: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags"></a>

```python
tags: Elasticloadbalancingv2TrustStoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a>

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

---

##### `ca_certificates_bundle_s3_bucket_input`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_bucket_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput"></a>

```python
ca_certificates_bundle_s3_bucket_input: str
```

- *Type:* str

---

##### `ca_certificates_bundle_s3_key_input`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput"></a>

```python
ca_certificates_bundle_s3_key_input: str
```

- *Type:* str

---

##### `ca_certificates_bundle_s3_object_version_input`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_object_version_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput"></a>

```python
ca_certificates_bundle_s3_object_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Elasticloadbalancingv2TrustStoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]

---

##### `ca_certificates_bundle_s3_bucket`<sup>Required</sup> <a name="ca_certificates_bundle_s3_bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket"></a>

```python
ca_certificates_bundle_s3_bucket: str
```

- *Type:* str

---

##### `ca_certificates_bundle_s3_key`<sup>Required</sup> <a name="ca_certificates_bundle_s3_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key"></a>

```python
ca_certificates_bundle_s3_key: str
```

- *Type:* str

---

##### `ca_certificates_bundle_s3_object_version`<sup>Required</sup> <a name="ca_certificates_bundle_s3_object_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion"></a>

```python
ca_certificates_bundle_s3_object_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TrustStoreConfig <a name="Elasticloadbalancingv2TrustStoreConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ca_certificates_bundle_s3_bucket: str = None,
  ca_certificates_bundle_s3_key: str = None,
  ca_certificates_bundle_s3_object_version: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2TrustStoreTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket">ca_certificates_bundle_s3_bucket</a></code> | <code>str</code> | The name of the S3 bucket to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key">ca_certificates_bundle_s3_key</a></code> | <code>str</code> | The name of the S3 object to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion">ca_certificates_bundle_s3_object_version</a></code> | <code>str</code> | The version of the S3 bucket that contains the CA certificate bundle. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name">name</a></code> | <code>str</code> | The name of the trust store. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]</code> | The tags to assign to the trust store. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_certificates_bundle_s3_bucket`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket"></a>

```python
ca_certificates_bundle_s3_bucket: str
```

- *Type:* str

The name of the S3 bucket to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_bucket}

---

##### `ca_certificates_bundle_s3_key`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key"></a>

```python
ca_certificates_bundle_s3_key: str
```

- *Type:* str

The name of the S3 object to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_key}

---

##### `ca_certificates_bundle_s3_object_version`<sup>Optional</sup> <a name="ca_certificates_bundle_s3_object_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion"></a>

```python
ca_certificates_bundle_s3_object_version: str
```

- *Type:* str

The version of the S3 bucket that contains the CA certificate bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_object_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#name Elasticloadbalancingv2TrustStore#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Elasticloadbalancingv2TrustStoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]

The tags to assign to the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#tags Elasticloadbalancingv2TrustStore#tags}

---

### Elasticloadbalancingv2TrustStoreTags <a name="Elasticloadbalancingv2TrustStoreTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TrustStoreTagsList <a name="Elasticloadbalancingv2TrustStoreTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2TrustStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2TrustStoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>]

---


### Elasticloadbalancingv2TrustStoreTagsOutputReference <a name="Elasticloadbalancingv2TrustStoreTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_trust_store

elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2TrustStoreTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags">Elasticloadbalancingv2TrustStoreTags</a>

---



