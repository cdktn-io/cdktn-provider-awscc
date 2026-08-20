# `certificatemanagerCertificate` Submodule <a name="`certificatemanagerCertificate` Submodule" id="@cdktn/provider-awscc.certificatemanagerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerCertificate <a name="CertificatemanagerCertificate" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate awscc_certificatemanager_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  certificate_authority_arn: str = None,
  certificate_export: str = None,
  certificate_transparency_logging_preference: str = None,
  domain_validation_options: IResolvable | typing.List[CertificatemanagerCertificateDomainValidationOptions] = None,
  key_algorithm: str = None,
  subject_alternative_names: typing.List[str] = None,
  tags: IResolvable | typing.List[CertificatemanagerCertificateTags] = None,
  validation_method: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.certificateExport">certificate_export</a></code> | <code>str</code> | Specifies whether the certificate can be exported. ENABLED allows the certificate to be exported, DISABLED prevents export. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.domainValidationOptions">domain_validation_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]</code> | Domain information that domain name registrars use to verify your identity. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]</code> | Key-value pairs that can identify the certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.validationMethod">validation_method</a></code> | <code>str</code> | The method you want to use to validate that you own or control the domain associated with a public certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.domainName"></a>

- *Type:* str

The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_name CertificatemanagerCertificate#domain_name}

---

##### `certificate_authority_arn`<sup>Optional</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_authority_arn CertificatemanagerCertificate#certificate_authority_arn}

---

##### `certificate_export`<sup>Optional</sup> <a name="certificate_export" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.certificateExport"></a>

- *Type:* str

Specifies whether the certificate can be exported. ENABLED allows the certificate to be exported, DISABLED prevents export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_export CertificatemanagerCertificate#certificate_export}

---

##### `certificate_transparency_logging_preference`<sup>Optional</sup> <a name="certificate_transparency_logging_preference" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.certificateTransparencyLoggingPreference"></a>

- *Type:* str

You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_transparency_logging_preference CertificatemanagerCertificate#certificate_transparency_logging_preference}

---

##### `domain_validation_options`<sup>Optional</sup> <a name="domain_validation_options" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.domainValidationOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]

Domain information that domain name registrars use to verify your identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_validation_options CertificatemanagerCertificate#domain_validation_options}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#key_algorithm CertificatemanagerCertificate#key_algorithm}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.subjectAlternativeNames"></a>

- *Type:* typing.List[str]

Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#subject_alternative_names CertificatemanagerCertificate#subject_alternative_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]

Key-value pairs that can identify the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#tags CertificatemanagerCertificate#tags}

---

##### `validation_method`<sup>Optional</sup> <a name="validation_method" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.Initializer.parameter.validationMethod"></a>

- *Type:* str

The method you want to use to validate that you own or control the domain associated with a public certificate.

Valid values are DNS, EMAIL or HTTP

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#validation_method CertificatemanagerCertificate#validation_method}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.putDomainValidationOptions">put_domain_validation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetCertificateAuthorityArn">reset_certificate_authority_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetCertificateExport">reset_certificate_export</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetCertificateTransparencyLoggingPreference">reset_certificate_transparency_logging_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetDomainValidationOptions">reset_domain_validation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetValidationMethod">reset_validation_method</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domain_validation_options` <a name="put_domain_validation_options" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.putDomainValidationOptions"></a>

```python
def put_domain_validation_options(
  value: IResolvable | typing.List[CertificatemanagerCertificateDomainValidationOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.putDomainValidationOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CertificatemanagerCertificateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]

---

##### `reset_certificate_authority_arn` <a name="reset_certificate_authority_arn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetCertificateAuthorityArn"></a>

```python
def reset_certificate_authority_arn() -> None
```

##### `reset_certificate_export` <a name="reset_certificate_export" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetCertificateExport"></a>

```python
def reset_certificate_export() -> None
```

##### `reset_certificate_transparency_logging_preference` <a name="reset_certificate_transparency_logging_preference" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetCertificateTransparencyLoggingPreference"></a>

```python
def reset_certificate_transparency_logging_preference() -> None
```

##### `reset_domain_validation_options` <a name="reset_domain_validation_options" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetDomainValidationOptions"></a>

```python
def reset_domain_validation_options() -> None
```

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_validation_method` <a name="reset_validation_method" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.resetValidationMethod"></a>

```python
def reset_validation_method() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CertificatemanagerCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isConstruct"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CertificatemanagerCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificatemanagerCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificatemanagerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainValidationOptions">domain_validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList">CertificatemanagerCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList">CertificatemanagerCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateExportInput">certificate_export_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateTransparencyLoggingPreferenceInput">certificate_transparency_logging_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainValidationOptionsInput">domain_validation_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.validationMethodInput">validation_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateExport">certificate_export</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.validationMethod">validation_method</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `domain_validation_options`<sup>Required</sup> <a name="domain_validation_options" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainValidationOptions"></a>

```python
domain_validation_options: CertificatemanagerCertificateDomainValidationOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList">CertificatemanagerCertificateDomainValidationOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.tags"></a>

```python
tags: CertificatemanagerCertificateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList">CertificatemanagerCertificateTagsList</a>

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `certificate_export_input`<sup>Optional</sup> <a name="certificate_export_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateExportInput"></a>

```python
certificate_export_input: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference_input`<sup>Optional</sup> <a name="certificate_transparency_logging_preference_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateTransparencyLoggingPreferenceInput"></a>

```python
certificate_transparency_logging_preference_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_validation_options_input`<sup>Optional</sup> <a name="domain_validation_options_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainValidationOptionsInput"></a>

```python
domain_validation_options_input: IResolvable | typing.List[CertificatemanagerCertificateDomainValidationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CertificatemanagerCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]

---

##### `validation_method_input`<sup>Optional</sup> <a name="validation_method_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.validationMethodInput"></a>

```python
validation_method_input: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `certificate_export`<sup>Required</sup> <a name="certificate_export" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateExport"></a>

```python
certificate_export: str
```

- *Type:* str

---

##### `certificate_transparency_logging_preference`<sup>Required</sup> <a name="certificate_transparency_logging_preference" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validation_method`<sup>Required</sup> <a name="validation_method" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.validationMethod"></a>

```python
validation_method: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerCertificateConfig <a name="CertificatemanagerCertificateConfig" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  certificate_authority_arn: str = None,
  certificate_export: str = None,
  certificate_transparency_logging_preference: str = None,
  domain_validation_options: IResolvable | typing.List[CertificatemanagerCertificateDomainValidationOptions] = None,
  key_algorithm: str = None,
  subject_alternative_names: typing.List[str] = None,
  tags: IResolvable | typing.List[CertificatemanagerCertificateTags] = None,
  validation_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.domainName">domain_name</a></code> | <code>str</code> | The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.certificateExport">certificate_export</a></code> | <code>str</code> | Specifies whether the certificate can be exported. ENABLED allows the certificate to be exported, DISABLED prevents export. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.certificateTransparencyLoggingPreference">certificate_transparency_logging_preference</a></code> | <code>str</code> | You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.domainValidationOptions">domain_validation_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]</code> | Domain information that domain name registrars use to verify your identity. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]</code> | Key-value pairs that can identify the certificate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.validationMethod">validation_method</a></code> | <code>str</code> | The method you want to use to validate that you own or control the domain associated with a public certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_name CertificatemanagerCertificate#domain_name}

---

##### `certificate_authority_arn`<sup>Optional</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_authority_arn CertificatemanagerCertificate#certificate_authority_arn}

---

##### `certificate_export`<sup>Optional</sup> <a name="certificate_export" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.certificateExport"></a>

```python
certificate_export: str
```

- *Type:* str

Specifies whether the certificate can be exported. ENABLED allows the certificate to be exported, DISABLED prevents export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_export CertificatemanagerCertificate#certificate_export}

---

##### `certificate_transparency_logging_preference`<sup>Optional</sup> <a name="certificate_transparency_logging_preference" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.certificateTransparencyLoggingPreference"></a>

```python
certificate_transparency_logging_preference: str
```

- *Type:* str

You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_transparency_logging_preference CertificatemanagerCertificate#certificate_transparency_logging_preference}

---

##### `domain_validation_options`<sup>Optional</sup> <a name="domain_validation_options" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.domainValidationOptions"></a>

```python
domain_validation_options: IResolvable | typing.List[CertificatemanagerCertificateDomainValidationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]

Domain information that domain name registrars use to verify your identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_validation_options CertificatemanagerCertificate#domain_validation_options}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#key_algorithm CertificatemanagerCertificate#key_algorithm}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#subject_alternative_names CertificatemanagerCertificate#subject_alternative_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CertificatemanagerCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]

Key-value pairs that can identify the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#tags CertificatemanagerCertificate#tags}

---

##### `validation_method`<sup>Optional</sup> <a name="validation_method" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateConfig.property.validationMethod"></a>

```python
validation_method: str
```

- *Type:* str

The method you want to use to validate that you own or control the domain associated with a public certificate.

Valid values are DNS, EMAIL or HTTP

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#validation_method CertificatemanagerCertificate#validation_method}

---

### CertificatemanagerCertificateDomainValidationOptions <a name="CertificatemanagerCertificateDomainValidationOptions" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions(
  domain_name: str = None,
  hosted_zone_id: str = None,
  validation_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_name CertificatemanagerCertificate#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#hosted_zone_id CertificatemanagerCertificate#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.property.validationDomain">validation_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#validation_domain CertificatemanagerCertificate#validation_domain}. |

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_name CertificatemanagerCertificate#domain_name}.

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#hosted_zone_id CertificatemanagerCertificate#hosted_zone_id}.

---

##### `validation_domain`<sup>Optional</sup> <a name="validation_domain" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions.property.validationDomain"></a>

```python
validation_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#validation_domain CertificatemanagerCertificate#validation_domain}.

---

### CertificatemanagerCertificateTags <a name="CertificatemanagerCertificateTags" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#key CertificatemanagerCertificate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#value CertificatemanagerCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerCertificateDomainValidationOptionsList <a name="CertificatemanagerCertificateDomainValidationOptionsList" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatemanagerCertificateDomainValidationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CertificatemanagerCertificateDomainValidationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>]

---


### CertificatemanagerCertificateDomainValidationOptionsOutputReference <a name="CertificatemanagerCertificateDomainValidationOptionsOutputReference" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resetHostedZoneId">reset_hosted_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resetValidationDomain">reset_validation_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_hosted_zone_id` <a name="reset_hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resetHostedZoneId"></a>

```python
def reset_hosted_zone_id() -> None
```

##### `reset_validation_domain` <a name="reset_validation_domain" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.resetValidationDomain"></a>

```python
def reset_validation_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.validationDomainInput">validation_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.validationDomain">validation_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `validation_domain_input`<sup>Optional</sup> <a name="validation_domain_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.validationDomainInput"></a>

```python
validation_domain_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `validation_domain`<sup>Required</sup> <a name="validation_domain" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.validationDomain"></a>

```python
validation_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerCertificateDomainValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateDomainValidationOptions">CertificatemanagerCertificateDomainValidationOptions</a>

---


### CertificatemanagerCertificateTagsList <a name="CertificatemanagerCertificateTagsList" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatemanagerCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CertificatemanagerCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>]

---


### CertificatemanagerCertificateTagsOutputReference <a name="CertificatemanagerCertificateTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_certificate

certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerCertificateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerCertificate.CertificatemanagerCertificateTags">CertificatemanagerCertificateTags</a>

---



