# `acmpcaCertificateAuthority` Submodule <a name="`acmpcaCertificateAuthority` Submodule" id="@cdktn/provider-awscc.acmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthority <a name="AcmpcaCertificateAuthority" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority awscc_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_algorithm: str,
  signing_algorithm: str,
  subject: AcmpcaCertificateAuthoritySubject,
  type: str,
  csr_extensions: AcmpcaCertificateAuthorityCsrExtensions = None,
  key_storage_security_standard: str = None,
  revocation_configuration: AcmpcaCertificateAuthorityRevocationConfiguration = None,
  tags: IResolvable | typing.List[AcmpcaCertificateAuthorityTags] = None,
  usage_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Algorithm your CA uses to sign certificate requests. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.csrExtensions">csr_extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyStorageSecurityStandard">key_storage_security_standard</a></code> | <code>str</code> | KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration">revocation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode">usage_mode</a></code> | <code>str</code> | Usage mode of the ceritificate authority. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.signingAlgorithm"></a>

- *Type:* str

Algorithm your CA uses to sign certificate requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.type"></a>

- *Type:* str

The type of the certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}

---

##### `csr_extensions`<sup>Optional</sup> <a name="csr_extensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.csrExtensions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#csr_extensions AcmpcaCertificateAuthority#csr_extensions}

---

##### `key_storage_security_standard`<sup>Optional</sup> <a name="key_storage_security_standard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.keyStorageSecurityStandard"></a>

- *Type:* str

KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}

---

##### `revocation_configuration`<sup>Optional</sup> <a name="revocation_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.revocationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `usage_mode`<sup>Optional</sup> <a name="usage_mode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.usageMode"></a>

- *Type:* str

Usage mode of the ceritificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions">put_csr_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration">put_revocation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetCsrExtensions">reset_csr_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetKeyStorageSecurityStandard">reset_key_storage_security_standard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration">reset_revocation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode">reset_usage_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_csr_extensions` <a name="put_csr_extensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions"></a>

```python
def put_csr_extensions(
  key_usage: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage = None,
  subject_information_access: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess] = None
) -> None
```

###### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions.parameter.keyUsage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

Structure that contains X.509 KeyUsage information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_usage AcmpcaCertificateAuthority#key_usage}

---

###### `subject_information_access`<sup>Optional</sup> <a name="subject_information_access" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions.parameter.subjectInformationAccess"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]

Array of X.509 AccessDescription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#subject_information_access AcmpcaCertificateAuthority#subject_information_access}

---

##### `put_revocation_configuration` <a name="put_revocation_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration"></a>

```python
def put_revocation_configuration(
  crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = None,
  ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration = None
) -> None
```

###### `crl_configuration`<sup>Optional</sup> <a name="crl_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.crlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

Your certificate authority can create and maintain a certificate revocation list (CRL).

A CRL contains information about certificates that have been revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

###### `ocsp_configuration`<sup>Optional</sup> <a name="ocsp_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.ocspConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

Helps to configure online certificate status protocol (OCSP) responder for your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

##### `put_subject` <a name="put_subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject"></a>

```python
def put_subject(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateAuthoritySubjectCustomAttributes] = None,
  distinguished_name_qualifier: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state: str = None,
  surname: str = None,
  title: str = None
) -> None
```

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.commonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.customAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.generationQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

###### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.initials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.locality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.organizationalUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.pseudonym"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

###### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.serialNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

###### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.surname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AcmpcaCertificateAuthorityTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]

---

##### `reset_csr_extensions` <a name="reset_csr_extensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetCsrExtensions"></a>

```python
def reset_csr_extensions() -> None
```

##### `reset_key_storage_security_standard` <a name="reset_key_storage_security_standard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetKeyStorageSecurityStandard"></a>

```python
def reset_key_storage_security_standard() -> None
```

##### `reset_revocation_configuration` <a name="reset_revocation_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration"></a>

```python
def reset_revocation_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_usage_mode` <a name="reset_usage_mode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode"></a>

```python
def reset_usage_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AcmpcaCertificateAuthority to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AcmpcaCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensions">csr_extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference">AcmpcaCertificateAuthorityCsrExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration">revocation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference">AcmpcaCertificateAuthoritySubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList">AcmpcaCertificateAuthorityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensionsInput">csr_extensions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandardInput">key_storage_security_standard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput">revocation_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subjectInput">subject_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput">usage_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandard">key_storage_security_standard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode">usage_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

---

##### `csr_extensions`<sup>Required</sup> <a name="csr_extensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensions"></a>

```python
csr_extensions: AcmpcaCertificateAuthorityCsrExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference">AcmpcaCertificateAuthorityCsrExtensionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revocation_configuration`<sup>Required</sup> <a name="revocation_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```python
revocation_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subject"></a>

```python
subject: AcmpcaCertificateAuthoritySubjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference">AcmpcaCertificateAuthoritySubjectOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags"></a>

```python
tags: AcmpcaCertificateAuthorityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList">AcmpcaCertificateAuthorityTagsList</a>

---

##### `csr_extensions_input`<sup>Optional</sup> <a name="csr_extensions_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensionsInput"></a>

```python
csr_extensions_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `key_storage_security_standard_input`<sup>Optional</sup> <a name="key_storage_security_standard_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandardInput"></a>

```python
key_storage_security_standard_input: str
```

- *Type:* str

---

##### `revocation_configuration_input`<sup>Optional</sup> <a name="revocation_configuration_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput"></a>

```python
revocation_configuration_input: IResolvable | AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subjectInput"></a>

```python
subject_input: IResolvable | AcmpcaCertificateAuthoritySubject
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AcmpcaCertificateAuthorityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usage_mode_input`<sup>Optional</sup> <a name="usage_mode_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput"></a>

```python
usage_mode_input: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `key_storage_security_standard`<sup>Required</sup> <a name="key_storage_security_standard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandard"></a>

```python
key_storage_security_standard: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usage_mode`<sup>Required</sup> <a name="usage_mode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode"></a>

```python
usage_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityConfig <a name="AcmpcaCertificateAuthorityConfig" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_algorithm: str,
  signing_algorithm: str,
  subject: AcmpcaCertificateAuthoritySubject,
  type: str,
  csr_extensions: AcmpcaCertificateAuthorityCsrExtensions = None,
  key_storage_security_standard: str = None,
  revocation_configuration: AcmpcaCertificateAuthorityRevocationConfiguration = None,
  tags: IResolvable | typing.List[AcmpcaCertificateAuthorityTags] = None,
  usage_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Algorithm your CA uses to sign certificate requests. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type">type</a></code> | <code>str</code> | The type of the certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.csrExtensions">csr_extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyStorageSecurityStandard">key_storage_security_standard</a></code> | <code>str</code> | KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration">revocation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode">usage_mode</a></code> | <code>str</code> | Usage mode of the ceritificate authority. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Algorithm your CA uses to sign certificate requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.subject"></a>

```python
subject: AcmpcaCertificateAuthoritySubject
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}

---

##### `csr_extensions`<sup>Optional</sup> <a name="csr_extensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.csrExtensions"></a>

```python
csr_extensions: AcmpcaCertificateAuthorityCsrExtensions
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#csr_extensions AcmpcaCertificateAuthority#csr_extensions}

---

##### `key_storage_security_standard`<sup>Optional</sup> <a name="key_storage_security_standard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyStorageSecurityStandard"></a>

```python
key_storage_security_standard: str
```

- *Type:* str

KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}

---

##### `revocation_configuration`<sup>Optional</sup> <a name="revocation_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration"></a>

```python
revocation_configuration: AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AcmpcaCertificateAuthorityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `usage_mode`<sup>Optional</sup> <a name="usage_mode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode"></a>

```python
usage_mode: str
```

- *Type:* str

Usage mode of the ceritificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}

---

### AcmpcaCertificateAuthorityCsrExtensions <a name="AcmpcaCertificateAuthorityCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions(
  key_usage: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage = None,
  subject_information_access: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | Structure that contains X.509 KeyUsage information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.subjectInformationAccess">subject_information_access</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]</code> | Array of X.509 AccessDescription. |

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.keyUsage"></a>

```python
key_usage: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

Structure that contains X.509 KeyUsage information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_usage AcmpcaCertificateAuthority#key_usage}

---

##### `subject_information_access`<sup>Optional</sup> <a name="subject_information_access" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.subjectInformationAccess"></a>

```python
subject_information_access: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]

Array of X.509 AccessDescription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#subject_information_access AcmpcaCertificateAuthority#subject_information_access}

---

### AcmpcaCertificateAuthorityCsrExtensionsKeyUsage <a name="AcmpcaCertificateAuthorityCsrExtensionsKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage(
  crl_sign: bool | IResolvable = None,
  data_encipherment: bool | IResolvable = None,
  decipher_only: bool | IResolvable = None,
  digital_signature: bool | IResolvable = None,
  encipher_only: bool | IResolvable = None,
  key_agreement: bool | IResolvable = None,
  key_cert_sign: bool | IResolvable = None,
  key_encipherment: bool | IResolvable = None,
  non_repudiation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.crlSign">crl_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.dataEncipherment">data_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.decipherOnly">decipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.digitalSignature">digital_signature</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.encipherOnly">encipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyAgreement">key_agreement</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyCertSign">key_cert_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyEncipherment">key_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.nonRepudiation">non_repudiation</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}. |

---

##### `crl_sign`<sup>Optional</sup> <a name="crl_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.crlSign"></a>

```python
crl_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}.

---

##### `data_encipherment`<sup>Optional</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.dataEncipherment"></a>

```python
data_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}.

---

##### `decipher_only`<sup>Optional</sup> <a name="decipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.decipherOnly"></a>

```python
decipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}.

---

##### `digital_signature`<sup>Optional</sup> <a name="digital_signature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.digitalSignature"></a>

```python
digital_signature: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}.

---

##### `encipher_only`<sup>Optional</sup> <a name="encipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.encipherOnly"></a>

```python
encipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}.

---

##### `key_agreement`<sup>Optional</sup> <a name="key_agreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyAgreement"></a>

```python
key_agreement: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}.

---

##### `key_cert_sign`<sup>Optional</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyCertSign"></a>

```python
key_cert_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}.

---

##### `key_encipherment`<sup>Optional</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyEncipherment"></a>

```python
key_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}.

---

##### `non_repudiation`<sup>Optional</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.nonRepudiation"></a>

```python
non_repudiation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess(
  access_location: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation = None,
  access_method: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessLocation">access_location</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | Structure that contains X.509 GeneralName information. Assign one and ONLY one field. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessMethod">access_method</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | Structure that contains X.509 AccessMethod information. Assign one and ONLY one field. |

---

##### `access_location`<sup>Optional</sup> <a name="access_location" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessLocation"></a>

```python
access_location: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

Structure that contains X.509 GeneralName information. Assign one and ONLY one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#access_location AcmpcaCertificateAuthority#access_location}

---

##### `access_method`<sup>Optional</sup> <a name="access_method" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessMethod"></a>

```python
access_method: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#access_method AcmpcaCertificateAuthority#access_method}

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation(
  directory_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName = None,
  dns_name: str = None,
  edi_party_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName = None,
  ip_address: str = None,
  other_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName = None,
  registered_id: str = None,
  rfc822_name: str = None,
  uniform_resource_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.directoryName">directory_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.dnsName">dns_name</a></code> | <code>str</code> | String that contains X.509 DnsName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ediPartyName">edi_party_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | Structure that contains X.509 EdiPartyName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ipAddress">ip_address</a></code> | <code>str</code> | String that contains X.509 IpAddress information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.otherName">other_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | Structure that contains X.509 OtherName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.registeredId">registered_id</a></code> | <code>str</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.rfc822Name">rfc822_name</a></code> | <code>str</code> | String that contains X.509 Rfc822Name information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.uniformResourceIdentifier">uniform_resource_identifier</a></code> | <code>str</code> | String that contains X.509 UniformResourceIdentifier information. |

---

##### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.directoryName"></a>

```python
directory_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#directory_name AcmpcaCertificateAuthority#directory_name}

---

##### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

String that contains X.509 DnsName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#dns_name AcmpcaCertificateAuthority#dns_name}

---

##### `edi_party_name`<sup>Optional</sup> <a name="edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ediPartyName"></a>

```python
edi_party_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

Structure that contains X.509 EdiPartyName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#edi_party_name AcmpcaCertificateAuthority#edi_party_name}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

String that contains X.509 IpAddress information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ip_address AcmpcaCertificateAuthority#ip_address}

---

##### `other_name`<sup>Optional</sup> <a name="other_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.otherName"></a>

```python
other_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

Structure that contains X.509 OtherName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#other_name AcmpcaCertificateAuthority#other_name}

---

##### `registered_id`<sup>Optional</sup> <a name="registered_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.registeredId"></a>

```python
registered_id: str
```

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#registered_id AcmpcaCertificateAuthority#registered_id}

---

##### `rfc822_name`<sup>Optional</sup> <a name="rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.rfc822Name"></a>

```python
rfc822_name: str
```

- *Type:* str

String that contains X.509 Rfc822Name information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#rfc_822_name AcmpcaCertificateAuthority#rfc_822_name}

---

##### `uniform_resource_identifier`<sup>Optional</sup> <a name="uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.uniformResourceIdentifier"></a>

```python
uniform_resource_identifier: str
```

- *Type:* str

String that contains X.509 UniformResourceIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#uniform_resource_identifier AcmpcaCertificateAuthority#uniform_resource_identifier}

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes] = None,
  distinguished_name_qualifier: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state: str = None,
  surname: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.customAttributes">custom_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]</code> | Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.initials">initials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.locality">locality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.pseudonym">pseudonym</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.serialNumber">serial_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.customAttributes"></a>

```python
custom_attributes: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.initials"></a>

```python
initials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.locality"></a>

```python
locality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.surname"></a>

```python
surname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes(
  object_identifier: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName(
  name_assigner: str = None,
  party_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.nameAssigner">name_assigner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.partyName">party_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}. |

---

##### `name_assigner`<sup>Optional</sup> <a name="name_assigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.nameAssigner"></a>

```python
name_assigner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}.

---

##### `party_name`<sup>Optional</sup> <a name="party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.partyName"></a>

```python
party_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName(
  type_id: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.typeId">type_id</a></code> | <code>str</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `type_id`<sup>Optional</sup> <a name="type_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.typeId"></a>

```python
type_id: str
```

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#type_id AcmpcaCertificateAuthority#type_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod(
  access_method_type: str = None,
  custom_object_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.accessMethodType">access_method_type</a></code> | <code>str</code> | Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.customObjectIdentifier">custom_object_identifier</a></code> | <code>str</code> | String that contains X.509 ObjectIdentifier information. |

---

##### `access_method_type`<sup>Optional</sup> <a name="access_method_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.accessMethodType"></a>

```python
access_method_type: str
```

- *Type:* str

Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#access_method_type AcmpcaCertificateAuthority#access_method_type}

---

##### `custom_object_identifier`<sup>Optional</sup> <a name="custom_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.customObjectIdentifier"></a>

```python
custom_object_identifier: str
```

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_object_identifier AcmpcaCertificateAuthority#custom_object_identifier}

---

### AcmpcaCertificateAuthorityRevocationConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration(
  crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = None,
  ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration">crl_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | Your certificate authority can create and maintain a certificate revocation list (CRL). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration">ocsp_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | Helps to configure online certificate status protocol (OCSP) responder for your certificate authority. |

---

##### `crl_configuration`<sup>Optional</sup> <a name="crl_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration"></a>

```python
crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

Your certificate authority can create and maintain a certificate revocation list (CRL).

A CRL contains information about certificates that have been revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

##### `ocsp_configuration`<sup>Optional</sup> <a name="ocsp_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration"></a>

```python
ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

Helps to configure online certificate status protocol (OCSP) responder for your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration(
  crl_distribution_point_extension_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration = None,
  crl_type: str = None,
  custom_cname: str = None,
  custom_path: str = None,
  enabled: bool | IResolvable = None,
  expiration_in_days: typing.Union[int, float] = None,
  s3_bucket_name: str = None,
  s3_object_acl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlDistributionPointExtensionConfiguration">crl_distribution_point_extension_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlType">crl_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname">custom_cname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customPath">custom_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl">s3_object_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}. |

---

##### `crl_distribution_point_extension_configuration`<sup>Optional</sup> <a name="crl_distribution_point_extension_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlDistributionPointExtensionConfiguration"></a>

```python
crl_distribution_point_extension_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_distribution_point_extension_configuration AcmpcaCertificateAuthority#crl_distribution_point_extension_configuration}

---

##### `crl_type`<sup>Optional</sup> <a name="crl_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlType"></a>

```python
crl_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}.

---

##### `custom_cname`<sup>Optional</sup> <a name="custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname"></a>

```python
custom_cname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

##### `custom_path`<sup>Optional</sup> <a name="custom_path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customPath"></a>

```python
custom_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `expiration_in_days`<sup>Optional</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

##### `s3_object_acl`<sup>Optional</sup> <a name="s3_object_acl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl"></a>

```python
s3_object_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration(
  omit_extension: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.property.omitExtension">omit_extension</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}. |

---

##### `omit_extension`<sup>Optional</sup> <a name="omit_extension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.property.omitExtension"></a>

```python
omit_extension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration(
  enabled: bool | IResolvable = None,
  ocsp_custom_cname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname">ocsp_custom_cname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `ocsp_custom_cname`<sup>Optional</sup> <a name="ocsp_custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname"></a>

```python
ocsp_custom_cname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

### AcmpcaCertificateAuthoritySubject <a name="AcmpcaCertificateAuthoritySubject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateAuthoritySubjectCustomAttributes] = None,
  distinguished_name_qualifier: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state: str = None,
  surname: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.customAttributes">custom_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]</code> | Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.initials">initials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.locality">locality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.pseudonym">pseudonym</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.serialNumber">serial_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.customAttributes"></a>

```python
custom_attributes: IResolvable | typing.List[AcmpcaCertificateAuthoritySubjectCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.initials"></a>

```python
initials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.surname"></a>

```python
surname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthoritySubjectCustomAttributes <a name="AcmpcaCertificateAuthoritySubjectCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes(
  object_identifier: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityTags <a name="AcmpcaCertificateAuthorityTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetCrlSign">reset_crl_sign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDataEncipherment">reset_data_encipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDecipherOnly">reset_decipher_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDigitalSignature">reset_digital_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetEncipherOnly">reset_encipher_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyAgreement">reset_key_agreement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyCertSign">reset_key_cert_sign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyEncipherment">reset_key_encipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetNonRepudiation">reset_non_repudiation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crl_sign` <a name="reset_crl_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetCrlSign"></a>

```python
def reset_crl_sign() -> None
```

##### `reset_data_encipherment` <a name="reset_data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDataEncipherment"></a>

```python
def reset_data_encipherment() -> None
```

##### `reset_decipher_only` <a name="reset_decipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDecipherOnly"></a>

```python
def reset_decipher_only() -> None
```

##### `reset_digital_signature` <a name="reset_digital_signature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDigitalSignature"></a>

```python
def reset_digital_signature() -> None
```

##### `reset_encipher_only` <a name="reset_encipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetEncipherOnly"></a>

```python
def reset_encipher_only() -> None
```

##### `reset_key_agreement` <a name="reset_key_agreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyAgreement"></a>

```python
def reset_key_agreement() -> None
```

##### `reset_key_cert_sign` <a name="reset_key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyCertSign"></a>

```python
def reset_key_cert_sign() -> None
```

##### `reset_key_encipherment` <a name="reset_key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyEncipherment"></a>

```python
def reset_key_encipherment() -> None
```

##### `reset_non_repudiation` <a name="reset_non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetNonRepudiation"></a>

```python
def reset_non_repudiation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSignInput">crl_sign_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEnciphermentInput">data_encipherment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnlyInput">decipher_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignatureInput">digital_signature_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnlyInput">encipher_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreementInput">key_agreement_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSignInput">key_cert_sign_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEnciphermentInput">key_encipherment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiationInput">non_repudiation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign">crl_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly">decipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature">digital_signature</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly">encipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement">key_agreement</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign">key_cert_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation">non_repudiation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_sign_input`<sup>Optional</sup> <a name="crl_sign_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSignInput"></a>

```python
crl_sign_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_encipherment_input`<sup>Optional</sup> <a name="data_encipherment_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```python
data_encipherment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `decipher_only_input`<sup>Optional</sup> <a name="decipher_only_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnlyInput"></a>

```python
decipher_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `digital_signature_input`<sup>Optional</sup> <a name="digital_signature_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignatureInput"></a>

```python
digital_signature_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encipher_only_input`<sup>Optional</sup> <a name="encipher_only_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnlyInput"></a>

```python
encipher_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_agreement_input`<sup>Optional</sup> <a name="key_agreement_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreementInput"></a>

```python
key_agreement_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_cert_sign_input`<sup>Optional</sup> <a name="key_cert_sign_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSignInput"></a>

```python
key_cert_sign_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_encipherment_input`<sup>Optional</sup> <a name="key_encipherment_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```python
key_encipherment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `non_repudiation_input`<sup>Optional</sup> <a name="non_repudiation_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiationInput"></a>

```python
non_repudiation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `crl_sign`<sup>Required</sup> <a name="crl_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign"></a>

```python
crl_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `decipher_only`<sup>Required</sup> <a name="decipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```python
decipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```python
digital_signature: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encipher_only`<sup>Required</sup> <a name="encipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```python
encipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```python
key_agreement: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_cert_sign`<sup>Required</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```python
key_cert_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `non_repudiation`<sup>Required</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```python
non_repudiation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsKeyUsage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage">put_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess">put_subject_information_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetKeyUsage">reset_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetSubjectInformationAccess">reset_subject_information_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_usage` <a name="put_key_usage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage"></a>

```python
def put_key_usage(
  crl_sign: bool | IResolvable = None,
  data_encipherment: bool | IResolvable = None,
  decipher_only: bool | IResolvable = None,
  digital_signature: bool | IResolvable = None,
  encipher_only: bool | IResolvable = None,
  key_agreement: bool | IResolvable = None,
  key_cert_sign: bool | IResolvable = None,
  key_encipherment: bool | IResolvable = None,
  non_repudiation: bool | IResolvable = None
) -> None
```

###### `crl_sign`<sup>Optional</sup> <a name="crl_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.crlSign"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}.

---

###### `data_encipherment`<sup>Optional</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.dataEncipherment"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}.

---

###### `decipher_only`<sup>Optional</sup> <a name="decipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.decipherOnly"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}.

---

###### `digital_signature`<sup>Optional</sup> <a name="digital_signature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.digitalSignature"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}.

---

###### `encipher_only`<sup>Optional</sup> <a name="encipher_only" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.encipherOnly"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}.

---

###### `key_agreement`<sup>Optional</sup> <a name="key_agreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.keyAgreement"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}.

---

###### `key_cert_sign`<sup>Optional</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.keyCertSign"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}.

---

###### `key_encipherment`<sup>Optional</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.keyEncipherment"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}.

---

###### `non_repudiation`<sup>Optional</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.nonRepudiation"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}.

---

##### `put_subject_information_access` <a name="put_subject_information_access" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess"></a>

```python
def put_subject_information_access(
  value: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]

---

##### `reset_key_usage` <a name="reset_key_usage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetKeyUsage"></a>

```python
def reset_key_usage() -> None
```

##### `reset_subject_information_access` <a name="reset_subject_information_access" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetSubjectInformationAccess"></a>

```python
def reset_subject_information_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess">subject_information_access</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsageInput">key_usage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccessInput">subject_information_access_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage"></a>

```python
key_usage: AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a>

---

##### `subject_information_access`<sup>Required</sup> <a name="subject_information_access" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess"></a>

```python
subject_information_access: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a>

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsageInput"></a>

```python
key_usage_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsKeyUsage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---

##### `subject_information_access_input`<sup>Optional</sup> <a name="subject_information_access_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccessInput"></a>

```python
subject_information_access_input: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier">reset_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_identifier` <a name="reset_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier"></a>

```python
def reset_object_identifier() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput">object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_identifier_input`<sup>Optional</sup> <a name="object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```python
object_identifier_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes">put_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_attributes` <a name="put_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes"></a>

```python
def put_custom_attributes(
  value: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]

---

##### `reset_common_name` <a name="reset_common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes"></a>

```python
custom_attributes: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a>

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetNameAssigner">reset_name_assigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetPartyName">reset_party_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name_assigner` <a name="reset_name_assigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetNameAssigner"></a>

```python
def reset_name_assigner() -> None
```

##### `reset_party_name` <a name="reset_party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetPartyName"></a>

```python
def reset_party_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssignerInput">name_assigner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyNameInput">party_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner">name_assigner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName">party_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_assigner_input`<sup>Optional</sup> <a name="name_assigner_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssignerInput"></a>

```python
name_assigner_input: str
```

- *Type:* str

---

##### `party_name_input`<sup>Optional</sup> <a name="party_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyNameInput"></a>

```python
party_name_input: str
```

- *Type:* str

---

##### `name_assigner`<sup>Required</sup> <a name="name_assigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner"></a>

```python
name_assigner: str
```

- *Type:* str

---

##### `party_name`<sup>Required</sup> <a name="party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName"></a>

```python
party_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetTypeId">reset_type_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type_id` <a name="reset_type_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetTypeId"></a>

```python
def reset_type_id() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeIdInput">type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId">type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_id_input`<sup>Optional</sup> <a name="type_id_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeIdInput"></a>

```python
type_id_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type_id`<sup>Required</sup> <a name="type_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId"></a>

```python
type_id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName">put_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName">put_edi_party_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName">put_other_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDirectoryName">reset_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDnsName">reset_dns_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetEdiPartyName">reset_edi_party_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetOtherName">reset_other_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRegisteredId">reset_registered_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRfc822Name">reset_rfc822_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetUniformResourceIdentifier">reset_uniform_resource_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_directory_name` <a name="put_directory_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName"></a>

```python
def put_directory_name(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes] = None,
  distinguished_name_qualifier: str = None,
  generation_qualifier: str = None,
  given_name: str = None,
  initials: str = None,
  locality: str = None,
  organization: str = None,
  organizational_unit: str = None,
  pseudonym: str = None,
  serial_number: str = None,
  state: str = None,
  surname: str = None,
  title: str = None
) -> None
```

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.commonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.customAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>]

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.generationQualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

###### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.initials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.locality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.organizationalUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.pseudonym"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

###### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.serialNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

###### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.surname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

##### `put_edi_party_name` <a name="put_edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName"></a>

```python
def put_edi_party_name(
  name_assigner: str = None,
  party_name: str = None
) -> None
```

###### `name_assigner`<sup>Optional</sup> <a name="name_assigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName.parameter.nameAssigner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}.

---

###### `party_name`<sup>Optional</sup> <a name="party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName.parameter.partyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}.

---

##### `put_other_name` <a name="put_other_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName"></a>

```python
def put_other_name(
  type_id: str = None,
  value: str = None
) -> None
```

###### `type_id`<sup>Optional</sup> <a name="type_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName.parameter.typeId"></a>

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#type_id AcmpcaCertificateAuthority#type_id}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

##### `reset_directory_name` <a name="reset_directory_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDirectoryName"></a>

```python
def reset_directory_name() -> None
```

##### `reset_dns_name` <a name="reset_dns_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDnsName"></a>

```python
def reset_dns_name() -> None
```

##### `reset_edi_party_name` <a name="reset_edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetEdiPartyName"></a>

```python
def reset_edi_party_name() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_other_name` <a name="reset_other_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetOtherName"></a>

```python
def reset_other_name() -> None
```

##### `reset_registered_id` <a name="reset_registered_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRegisteredId"></a>

```python
def reset_registered_id() -> None
```

##### `reset_rfc822_name` <a name="reset_rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRfc822Name"></a>

```python
def reset_rfc822_name() -> None
```

##### `reset_uniform_resource_identifier` <a name="reset_uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetUniformResourceIdentifier"></a>

```python
def reset_uniform_resource_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName">directory_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName">edi_party_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName">other_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryNameInput">directory_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyNameInput">edi_party_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherNameInput">other_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredIdInput">registered_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822NameInput">rfc822_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifierInput">uniform_resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId">registered_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name">rfc822_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier">uniform_resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName"></a>

```python
directory_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a>

---

##### `edi_party_name`<sup>Required</sup> <a name="edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName"></a>

```python
edi_party_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a>

---

##### `other_name`<sup>Required</sup> <a name="other_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName"></a>

```python
other_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a>

---

##### `directory_name_input`<sup>Optional</sup> <a name="directory_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryNameInput"></a>

```python
directory_name_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `edi_party_name_input`<sup>Optional</sup> <a name="edi_party_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyNameInput"></a>

```python
edi_party_name_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `other_name_input`<sup>Optional</sup> <a name="other_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherNameInput"></a>

```python
other_name_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---

##### `registered_id_input`<sup>Optional</sup> <a name="registered_id_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredIdInput"></a>

```python
registered_id_input: str
```

- *Type:* str

---

##### `rfc822_name_input`<sup>Optional</sup> <a name="rfc822_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822NameInput"></a>

```python
rfc822_name_input: str
```

- *Type:* str

---

##### `uniform_resource_identifier_input`<sup>Optional</sup> <a name="uniform_resource_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifierInput"></a>

```python
uniform_resource_identifier_input: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `registered_id`<sup>Required</sup> <a name="registered_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId"></a>

```python
registered_id: str
```

- *Type:* str

---

##### `rfc822_name`<sup>Required</sup> <a name="rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name"></a>

```python
rfc822_name: str
```

- *Type:* str

---

##### `uniform_resource_identifier`<sup>Required</sup> <a name="uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier"></a>

```python
uniform_resource_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetAccessMethodType">reset_access_method_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetCustomObjectIdentifier">reset_custom_object_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_method_type` <a name="reset_access_method_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetAccessMethodType"></a>

```python
def reset_access_method_type() -> None
```

##### `reset_custom_object_identifier` <a name="reset_custom_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetCustomObjectIdentifier"></a>

```python
def reset_custom_object_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodTypeInput">access_method_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifierInput">custom_object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType">access_method_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier">custom_object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_method_type_input`<sup>Optional</sup> <a name="access_method_type_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodTypeInput"></a>

```python
access_method_type_input: str
```

- *Type:* str

---

##### `custom_object_identifier_input`<sup>Optional</sup> <a name="custom_object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifierInput"></a>

```python
custom_object_identifier_input: str
```

- *Type:* str

---

##### `access_method_type`<sup>Required</sup> <a name="access_method_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType"></a>

```python
access_method_type: str
```

- *Type:* str

---

##### `custom_object_identifier`<sup>Required</sup> <a name="custom_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier"></a>

```python
custom_object_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>]

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation">put_access_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod">put_access_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessLocation">reset_access_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessMethod">reset_access_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_location` <a name="put_access_location" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation"></a>

```python
def put_access_location(
  directory_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName = None,
  dns_name: str = None,
  edi_party_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName = None,
  ip_address: str = None,
  other_name: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName = None,
  registered_id: str = None,
  rfc822_name: str = None,
  uniform_resource_identifier: str = None
) -> None
```

###### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.directoryName"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#directory_name AcmpcaCertificateAuthority#directory_name}

---

###### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.dnsName"></a>

- *Type:* str

String that contains X.509 DnsName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#dns_name AcmpcaCertificateAuthority#dns_name}

---

###### `edi_party_name`<sup>Optional</sup> <a name="edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.ediPartyName"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

Structure that contains X.509 EdiPartyName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#edi_party_name AcmpcaCertificateAuthority#edi_party_name}

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.ipAddress"></a>

- *Type:* str

String that contains X.509 IpAddress information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ip_address AcmpcaCertificateAuthority#ip_address}

---

###### `other_name`<sup>Optional</sup> <a name="other_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.otherName"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

Structure that contains X.509 OtherName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#other_name AcmpcaCertificateAuthority#other_name}

---

###### `registered_id`<sup>Optional</sup> <a name="registered_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.registeredId"></a>

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#registered_id AcmpcaCertificateAuthority#registered_id}

---

###### `rfc822_name`<sup>Optional</sup> <a name="rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.rfc822Name"></a>

- *Type:* str

String that contains X.509 Rfc822Name information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#rfc_822_name AcmpcaCertificateAuthority#rfc_822_name}

---

###### `uniform_resource_identifier`<sup>Optional</sup> <a name="uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.uniformResourceIdentifier"></a>

- *Type:* str

String that contains X.509 UniformResourceIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#uniform_resource_identifier AcmpcaCertificateAuthority#uniform_resource_identifier}

---

##### `put_access_method` <a name="put_access_method" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod"></a>

```python
def put_access_method(
  access_method_type: str = None,
  custom_object_identifier: str = None
) -> None
```

###### `access_method_type`<sup>Optional</sup> <a name="access_method_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod.parameter.accessMethodType"></a>

- *Type:* str

Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#access_method_type AcmpcaCertificateAuthority#access_method_type}

---

###### `custom_object_identifier`<sup>Optional</sup> <a name="custom_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod.parameter.customObjectIdentifier"></a>

- *Type:* str

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_object_identifier AcmpcaCertificateAuthority#custom_object_identifier}

---

##### `reset_access_location` <a name="reset_access_location" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessLocation"></a>

```python
def reset_access_location() -> None
```

##### `reset_access_method` <a name="reset_access_method" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessMethod"></a>

```python
def reset_access_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation">access_location</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod">access_method</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocationInput">access_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethodInput">access_method_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_location`<sup>Required</sup> <a name="access_location" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation"></a>

```python
access_location: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a>

---

##### `access_method`<sup>Required</sup> <a name="access_method" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod"></a>

```python
access_method: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a>

---

##### `access_location_input`<sup>Optional</sup> <a name="access_location_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocationInput"></a>

```python
access_location_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---

##### `access_method_input`<sup>Optional</sup> <a name="access_method_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethodInput"></a>

```python
access_method_input: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resetOmitExtension">reset_omit_extension</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_omit_extension` <a name="reset_omit_extension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resetOmitExtension"></a>

```python
def reset_omit_extension() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtensionInput">omit_extension_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension">omit_extension</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `omit_extension_input`<sup>Optional</sup> <a name="omit_extension_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtensionInput"></a>

```python
omit_extension_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `omit_extension`<sup>Required</sup> <a name="omit_extension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension"></a>

```python
omit_extension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration">put_crl_distribution_point_extension_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlDistributionPointExtensionConfiguration">reset_crl_distribution_point_extension_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlType">reset_crl_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname">reset_custom_cname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomPath">reset_custom_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays">reset_expiration_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl">reset_s3_object_acl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_crl_distribution_point_extension_configuration` <a name="put_crl_distribution_point_extension_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration"></a>

```python
def put_crl_distribution_point_extension_configuration(
  omit_extension: bool | IResolvable = None
) -> None
```

###### `omit_extension`<sup>Optional</sup> <a name="omit_extension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration.parameter.omitExtension"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}.

---

##### `reset_crl_distribution_point_extension_configuration` <a name="reset_crl_distribution_point_extension_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlDistributionPointExtensionConfiguration"></a>

```python
def reset_crl_distribution_point_extension_configuration() -> None
```

##### `reset_crl_type` <a name="reset_crl_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlType"></a>

```python
def reset_crl_type() -> None
```

##### `reset_custom_cname` <a name="reset_custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname"></a>

```python
def reset_custom_cname() -> None
```

##### `reset_custom_path` <a name="reset_custom_path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomPath"></a>

```python
def reset_custom_path() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_expiration_in_days` <a name="reset_expiration_in_days" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays"></a>

```python
def reset_expiration_in_days() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_object_acl` <a name="reset_s3_object_acl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl"></a>

```python
def reset_s3_object_acl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration">crl_distribution_point_extension_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfigurationInput">crl_distribution_point_extension_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlTypeInput">crl_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput">custom_cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPathInput">custom_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput">expiration_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput">s3_object_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType">crl_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">custom_cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath">custom_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3_object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_distribution_point_extension_configuration`<sup>Required</sup> <a name="crl_distribution_point_extension_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration"></a>

```python
crl_distribution_point_extension_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a>

---

##### `crl_distribution_point_extension_configuration_input`<sup>Optional</sup> <a name="crl_distribution_point_extension_configuration_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfigurationInput"></a>

```python
crl_distribution_point_extension_configuration_input: IResolvable | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---

##### `crl_type_input`<sup>Optional</sup> <a name="crl_type_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlTypeInput"></a>

```python
crl_type_input: str
```

- *Type:* str

---

##### `custom_cname_input`<sup>Optional</sup> <a name="custom_cname_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput"></a>

```python
custom_cname_input: str
```

- *Type:* str

---

##### `custom_path_input`<sup>Optional</sup> <a name="custom_path_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPathInput"></a>

```python
custom_path_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `expiration_in_days_input`<sup>Optional</sup> <a name="expiration_in_days_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput"></a>

```python
expiration_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_object_acl_input`<sup>Optional</sup> <a name="s3_object_acl_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput"></a>

```python
s3_object_acl_input: str
```

- *Type:* str

---

##### `crl_type`<sup>Required</sup> <a name="crl_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType"></a>

```python
crl_type: str
```

- *Type:* str

---

##### `custom_cname`<sup>Required</sup> <a name="custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```python
custom_cname: str
```

- *Type:* str

---

##### `custom_path`<sup>Required</sup> <a name="custom_path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath"></a>

```python
custom_path: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `expiration_in_days`<sup>Required</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_object_acl`<sup>Required</sup> <a name="s3_object_acl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```python
s3_object_acl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname">reset_ocsp_custom_cname</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_ocsp_custom_cname` <a name="reset_ocsp_custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname"></a>

```python
def reset_ocsp_custom_cname() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput">ocsp_custom_cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocsp_custom_cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ocsp_custom_cname_input`<sup>Optional</sup> <a name="ocsp_custom_cname_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput"></a>

```python
ocsp_custom_cname_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ocsp_custom_cname`<sup>Required</sup> <a name="ocsp_custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```python
ocsp_custom_cname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### AcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration">put_crl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration">put_ocsp_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration">reset_crl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration">reset_ocsp_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_crl_configuration` <a name="put_crl_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration"></a>

```python
def put_crl_configuration(
  crl_distribution_point_extension_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration = None,
  crl_type: str = None,
  custom_cname: str = None,
  custom_path: str = None,
  enabled: bool | IResolvable = None,
  expiration_in_days: typing.Union[int, float] = None,
  s3_bucket_name: str = None,
  s3_object_acl: str = None
) -> None
```

###### `crl_distribution_point_extension_configuration`<sup>Optional</sup> <a name="crl_distribution_point_extension_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.crlDistributionPointExtensionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_distribution_point_extension_configuration AcmpcaCertificateAuthority#crl_distribution_point_extension_configuration}

---

###### `crl_type`<sup>Optional</sup> <a name="crl_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.crlType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}.

---

###### `custom_cname`<sup>Optional</sup> <a name="custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.customCname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

###### `custom_path`<sup>Optional</sup> <a name="custom_path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.customPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

###### `expiration_in_days`<sup>Optional</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.expirationInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

###### `s3_object_acl`<sup>Optional</sup> <a name="s3_object_acl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.s3ObjectAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

##### `put_ocsp_configuration` <a name="put_ocsp_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration"></a>

```python
def put_ocsp_configuration(
  enabled: bool | IResolvable = None,
  ocsp_custom_cname: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

###### `ocsp_custom_cname`<sup>Optional</sup> <a name="ocsp_custom_cname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.ocspCustomCname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

##### `reset_crl_configuration` <a name="reset_crl_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration"></a>

```python
def reset_crl_configuration() -> None
```

##### `reset_ocsp_configuration` <a name="reset_ocsp_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration"></a>

```python
def reset_ocsp_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crl_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocsp_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput">crl_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput">ocsp_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_configuration`<sup>Required</sup> <a name="crl_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```python
crl_configuration: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a>

---

##### `ocsp_configuration`<sup>Required</sup> <a name="ocsp_configuration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```python
ocsp_configuration: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a>

---

##### `crl_configuration_input`<sup>Optional</sup> <a name="crl_configuration_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput"></a>

```python
crl_configuration_input: IResolvable | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `ocsp_configuration_input`<sup>Optional</sup> <a name="ocsp_configuration_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput"></a>

```python
ocsp_configuration_input: IResolvable | AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---


### AcmpcaCertificateAuthoritySubjectCustomAttributesList <a name="AcmpcaCertificateAuthoritySubjectCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateAuthoritySubjectCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]

---


### AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference <a name="AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetObjectIdentifier">reset_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_identifier` <a name="reset_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetObjectIdentifier"></a>

```python
def reset_object_identifier() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifierInput">object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_identifier_input`<sup>Optional</sup> <a name="object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```python
object_identifier_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthoritySubjectCustomAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>

---


### AcmpcaCertificateAuthoritySubjectOutputReference <a name="AcmpcaCertificateAuthoritySubjectOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes">put_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_attributes` <a name="put_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes"></a>

```python
def put_custom_attributes(
  value: IResolvable | typing.List[AcmpcaCertificateAuthoritySubjectCustomAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]

---

##### `reset_common_name` <a name="reset_common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList">AcmpcaCertificateAuthoritySubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes"></a>

```python
custom_attributes: AcmpcaCertificateAuthoritySubjectCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList">AcmpcaCertificateAuthoritySubjectCustomAttributesList</a>

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: IResolvable | typing.List[AcmpcaCertificateAuthoritySubjectCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes">AcmpcaCertificateAuthoritySubjectCustomAttributes</a>]

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthoritySubject
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

---


### AcmpcaCertificateAuthorityTagsList <a name="AcmpcaCertificateAuthorityTagsList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateAuthorityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateAuthorityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>]

---


### AcmpcaCertificateAuthorityTagsOutputReference <a name="AcmpcaCertificateAuthorityTagsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority

acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateAuthorityTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags">AcmpcaCertificateAuthorityTags</a>

---



