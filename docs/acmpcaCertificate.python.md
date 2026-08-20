# `acmpcaCertificate` Submodule <a name="`acmpcaCertificate` Submodule" id="@cdktn/provider-awscc.acmpcaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificate <a name="AcmpcaCertificate" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate awscc_acmpca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_authority_arn: str,
  certificate_signing_request: str,
  signing_algorithm: str,
  validity: AcmpcaCertificateValidity,
  api_passthrough: AcmpcaCertificateApiPassthrough = None,
  template_arn: str = None,
  validity_not_before: AcmpcaCertificateValidityNotBefore = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the private CA issues the certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | The certificate signing request (CSR) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | The name of the algorithm that will be used to sign the certificate to be issued. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | The period of time during which the certificate will be valid. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.apiPassthrough">api_passthrough</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.templateArn">template_arn</a></code> | <code>str</code> | Specifies a custom configuration template to use when issuing a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.validityNotBefore">validity_not_before</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | Information describing the start of the validity period of the certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the private CA issues the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.certificateSigningRequest"></a>

- *Type:* str

The certificate signing request (CSR) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.signingAlgorithm"></a>

- *Type:* str

The name of the algorithm that will be used to sign the certificate to be issued.

This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.validity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

The period of time during which the certificate will be valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `api_passthrough`<sup>Optional</sup> <a name="api_passthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.apiPassthrough"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}

---

##### `template_arn`<sup>Optional</sup> <a name="template_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.templateArn"></a>

- *Type:* str

Specifies a custom configuration template to use when issuing a certificate.

If this parameter is not provided, PCAshort defaults to the `EndEntityCertificate/V1` template. For more information about PCAshort templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}

---

##### `validity_not_before`<sup>Optional</sup> <a name="validity_not_before" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.validityNotBefore"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

Information describing the start of the validity period of the certificate.

This parameter sets the ?Not Before" date for the certificate.
By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the ?Not Before? value.
Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#validity_not_before AcmpcaCertificate#validity_not_before}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough">put_api_passthrough</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity">put_validity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore">put_validity_not_before</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetApiPassthrough">reset_api_passthrough</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn">reset_template_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetValidityNotBefore">reset_validity_not_before</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_passthrough` <a name="put_api_passthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough"></a>

```python
def put_api_passthrough(
  extensions: AcmpcaCertificateApiPassthroughExtensions = None,
  subject: AcmpcaCertificateApiPassthroughSubject = None
) -> None
```

###### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough.parameter.extensions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

Specifies X.509 extension information for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#extensions AcmpcaCertificate#extensions}

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putApiPassthrough.parameter.subject"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

Contains information about the certificate subject.

The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#subject AcmpcaCertificate#subject}

---

##### `put_validity` <a name="put_validity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity"></a>

```python
def put_validity(
  type: str,
  value: typing.Union[int, float]
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.type"></a>

- *Type:* str

Specifies whether the ``Value`` parameter represents days, months, or years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.value"></a>

- *Type:* typing.Union[int, float]

A long integer interpreted according to the value of ``Type``, below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

##### `put_validity_not_before` <a name="put_validity_not_before" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore"></a>

```python
def put_validity_not_before(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore.parameter.type"></a>

- *Type:* str

Specifies whether the ``Value`` parameter represents days, months, or years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.putValidityNotBefore.parameter.value"></a>

- *Type:* typing.Union[int, float]

A long integer interpreted according to the value of ``Type``, below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

##### `reset_api_passthrough` <a name="reset_api_passthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetApiPassthrough"></a>

```python
def reset_api_passthrough() -> None
```

##### `reset_template_arn` <a name="reset_template_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn"></a>

```python
def reset_template_arn() -> None
```

##### `reset_validity_not_before` <a name="reset_validity_not_before" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.resetValidityNotBefore"></a>

```python
def reset_validity_not_before() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AcmpcaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isConstruct"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AcmpcaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AcmpcaCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AcmpcaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthrough">api_passthrough</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference">AcmpcaCertificateApiPassthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBefore">validity_not_before</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference">AcmpcaCertificateValidityNotBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthroughInput">api_passthrough_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput">certificate_signing_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput">template_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityInput">validity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBeforeInput">validity_not_before_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_passthrough`<sup>Required</sup> <a name="api_passthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthrough"></a>

```python
api_passthrough: AcmpcaCertificateApiPassthroughOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference">AcmpcaCertificateApiPassthroughOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validity"></a>

```python
validity: AcmpcaCertificateValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a>

---

##### `validity_not_before`<sup>Required</sup> <a name="validity_not_before" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBefore"></a>

```python
validity_not_before: AcmpcaCertificateValidityNotBeforeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference">AcmpcaCertificateValidityNotBeforeOutputReference</a>

---

##### `api_passthrough_input`<sup>Optional</sup> <a name="api_passthrough_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.apiPassthroughInput"></a>

```python
api_passthrough_input: IResolvable | AcmpcaCertificateApiPassthrough
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `certificate_signing_request_input`<sup>Optional</sup> <a name="certificate_signing_request_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput"></a>

```python
certificate_signing_request_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `template_arn_input`<sup>Optional</sup> <a name="template_arn_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput"></a>

```python
template_arn_input: str
```

- *Type:* str

---

##### `validity_input`<sup>Optional</sup> <a name="validity_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityInput"></a>

```python
validity_input: IResolvable | AcmpcaCertificateValidity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `validity_not_before_input`<sup>Optional</sup> <a name="validity_not_before_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.validityNotBeforeInput"></a>

```python
validity_not_before_input: IResolvable | AcmpcaCertificateValidityNotBefore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateApiPassthrough <a name="AcmpcaCertificateApiPassthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthrough(
  extensions: AcmpcaCertificateApiPassthroughExtensions = None,
  subject: AcmpcaCertificateApiPassthroughSubject = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a></code> | Specifies X.509 extension information for a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a></code> | Contains information about the certificate subject. |

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.extensions"></a>

```python
extensions: AcmpcaCertificateApiPassthroughExtensions
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

Specifies X.509 extension information for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#extensions AcmpcaCertificate#extensions}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough.property.subject"></a>

```python
subject: AcmpcaCertificateApiPassthroughSubject
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

Contains information about the certificate subject.

The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#subject AcmpcaCertificate#subject}

---

### AcmpcaCertificateApiPassthroughExtensions <a name="AcmpcaCertificateApiPassthroughExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions(
  certificate_policies: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies] = None,
  custom_extensions: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCustomExtensions] = None,
  extended_key_usage: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage] = None,
  key_usage: AcmpcaCertificateApiPassthroughExtensionsKeyUsage = None,
  subject_alternative_names: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.certificatePolicies">certificate_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]</code> | Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.customExtensions">custom_extensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]</code> | Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.extendedKeyUsage">extended_key_usage</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]</code> | Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | Defines one or more purposes for which the key contained in the certificate can be used. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]</code> | The subject alternative name extension allows identities to be bound to the subject of the certificate. |

---

##### `certificate_policies`<sup>Optional</sup> <a name="certificate_policies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.certificatePolicies"></a>

```python
certificate_policies: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]

Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers.

For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#certificate_policies AcmpcaCertificate#certificate_policies}

---

##### `custom_extensions`<sup>Optional</sup> <a name="custom_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.customExtensions"></a>

```python
custom_extensions: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCustomExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]

Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#custom_extensions AcmpcaCertificate#custom_extensions}

---

##### `extended_key_usage`<sup>Optional</sup> <a name="extended_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.extendedKeyUsage"></a>

```python
extended_key_usage: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]

Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#extended_key_usage AcmpcaCertificate#extended_key_usage}

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.keyUsage"></a>

```python
key_usage: AcmpcaCertificateApiPassthroughExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

Defines one or more purposes for which the key contained in the certificate can be used.

Default value for each option is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_usage AcmpcaCertificate#key_usage}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]

The subject alternative name extension allows identities to be bound to the subject of the certificate.

These identities may be included in addition to or in place of the identity in the subject field of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#subject_alternative_names AcmpcaCertificate#subject_alternative_names}

---

### AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies(
  cert_policy_id: str = None,
  policy_qualifiers: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.certPolicyId">cert_policy_id</a></code> | <code>str</code> | Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.policyQualifiers">policy_qualifiers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]</code> | Modifies the given ``CertPolicyId`` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier. |

---

##### `cert_policy_id`<sup>Optional</sup> <a name="cert_policy_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.certPolicyId"></a>

```python
cert_policy_id: str
```

- *Type:* str

Specifies the object identifier (OID) of the certificate policy under which the certificate was issued.

For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#cert_policy_id AcmpcaCertificate#cert_policy_id}

---

##### `policy_qualifiers`<sup>Optional</sup> <a name="policy_qualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies.property.policyQualifiers"></a>

```python
policy_qualifiers: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]

Modifies the given ``CertPolicyId`` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#policy_qualifiers AcmpcaCertificate#policy_qualifiers}

---

### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers(
  policy_qualifier_id: str = None,
  qualifier: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.policyQualifierId">policy_qualifier_id</a></code> | <code>str</code> | Identifies the qualifier modifying a ``CertPolicyId``. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.qualifier">qualifier</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | Defines the qualifier type. |

---

##### `policy_qualifier_id`<sup>Optional</sup> <a name="policy_qualifier_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.policyQualifierId"></a>

```python
policy_qualifier_id: str
```

- *Type:* str

Identifies the qualifier modifying a ``CertPolicyId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#policy_qualifier_id AcmpcaCertificate#policy_qualifier_id}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers.property.qualifier"></a>

```python
qualifier: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

Defines the qualifier type.

AWS Private CA supports the use of a URI for a CPS qualifier in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#qualifier AcmpcaCertificate#qualifier}

---

### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier(
  cps_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.property.cpsUri">cps_uri</a></code> | <code>str</code> | Contains a pointer to a certification practice statement (CPS) published by the CA. |

---

##### `cps_uri`<sup>Optional</sup> <a name="cps_uri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier.property.cpsUri"></a>

```python
cps_uri: str
```

- *Type:* str

Contains a pointer to a certification practice statement (CPS) published by the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#cps_uri AcmpcaCertificate#cps_uri}

---

### AcmpcaCertificateApiPassthroughExtensionsCustomExtensions <a name="AcmpcaCertificateApiPassthroughExtensionsCustomExtensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions(
  critical: bool | IResolvable = None,
  object_identifier: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.critical">critical</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies the critical flag of the X.509 extension. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.value">value</a></code> | <code>str</code> | Specifies the base64-encoded value of the X.509 extension. |

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.critical"></a>

```python
critical: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies the critical flag of the X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#critical AcmpcaCertificate#critical}

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#object_identifier AcmpcaCertificate#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions.property.value"></a>

```python
value: str
```

- *Type:* str

Specifies the base64-encoded value of the X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage <a name="AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage(
  extended_key_usage_object_identifier: str = None,
  extended_key_usage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageObjectIdentifier">extended_key_usage_object_identifier</a></code> | <code>str</code> | Specifies a custom ``ExtendedKeyUsage`` with an object identifier (OID). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageType">extended_key_usage_type</a></code> | <code>str</code> | Specifies a standard ``ExtendedKeyUsage`` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). |

---

##### `extended_key_usage_object_identifier`<sup>Optional</sup> <a name="extended_key_usage_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageObjectIdentifier"></a>

```python
extended_key_usage_object_identifier: str
```

- *Type:* str

Specifies a custom ``ExtendedKeyUsage`` with an object identifier (OID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#extended_key_usage_object_identifier AcmpcaCertificate#extended_key_usage_object_identifier}

---

##### `extended_key_usage_type`<sup>Optional</sup> <a name="extended_key_usage_type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage.property.extendedKeyUsageType"></a>

```python
extended_key_usage_type: str
```

- *Type:* str

Specifies a standard ``ExtendedKeyUsage`` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#extended_key_usage_type AcmpcaCertificate#extended_key_usage_type}

---

### AcmpcaCertificateApiPassthroughExtensionsKeyUsage <a name="AcmpcaCertificateApiPassthroughExtensionsKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage(
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
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.crlSign">crl_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used to sign CRLs. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.dataEncipherment">data_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used to decipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.decipherOnly">decipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used only to decipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.digitalSignature">digital_signature</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used for digital signing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.encipherOnly">encipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used only to encipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyAgreement">key_agreement</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used in a key-agreement protocol. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyCertSign">key_cert_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used to sign certificates. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyEncipherment">key_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used to encipher data. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.nonRepudiation">non_repudiation</a></code> | <code>bool \| cdktn.IResolvable</code> | Key can be used for non-repudiation. |

---

##### `crl_sign`<sup>Optional</sup> <a name="crl_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.crlSign"></a>

```python
crl_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used to sign CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#crl_sign AcmpcaCertificate#crl_sign}

---

##### `data_encipherment`<sup>Optional</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.dataEncipherment"></a>

```python
data_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used to decipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#data_encipherment AcmpcaCertificate#data_encipherment}

---

##### `decipher_only`<sup>Optional</sup> <a name="decipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.decipherOnly"></a>

```python
decipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used only to decipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#decipher_only AcmpcaCertificate#decipher_only}

---

##### `digital_signature`<sup>Optional</sup> <a name="digital_signature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.digitalSignature"></a>

```python
digital_signature: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used for digital signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#digital_signature AcmpcaCertificate#digital_signature}

---

##### `encipher_only`<sup>Optional</sup> <a name="encipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.encipherOnly"></a>

```python
encipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used only to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#encipher_only AcmpcaCertificate#encipher_only}

---

##### `key_agreement`<sup>Optional</sup> <a name="key_agreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyAgreement"></a>

```python
key_agreement: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used in a key-agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_agreement AcmpcaCertificate#key_agreement}

---

##### `key_cert_sign`<sup>Optional</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyCertSign"></a>

```python
key_cert_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_cert_sign AcmpcaCertificate#key_cert_sign}

---

##### `key_encipherment`<sup>Optional</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.keyEncipherment"></a>

```python
key_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_encipherment AcmpcaCertificate#key_encipherment}

---

##### `non_repudiation`<sup>Optional</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage.property.nonRepudiation"></a>

```python
non_repudiation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Key can be used for non-repudiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#non_repudiation AcmpcaCertificate#non_repudiation}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames(
  directory_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName = None,
  dns_name: str = None,
  edi_party_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName = None,
  ip_address: str = None,
  other_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName = None,
  registered_id: str = None,
  rfc822_name: str = None,
  uniform_resource_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.directoryName">directory_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | Contains information about the certificate subject. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.dnsName">dns_name</a></code> | <code>str</code> | Represents ``GeneralName`` as a DNS name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ediPartyName">edi_party_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | Represents ``GeneralName`` as an ``EdiPartyName`` object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ipAddress">ip_address</a></code> | <code>str</code> | Represents ``GeneralName`` as an IPv4 or IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.otherName">other_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | Represents ``GeneralName`` using an ``OtherName`` object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.registeredId">registered_id</a></code> | <code>str</code> | Represents ``GeneralName`` as an object identifier (OID). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.rfc822Name">rfc822_name</a></code> | <code>str</code> | Represents ``GeneralName`` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.uniformResourceIdentifier">uniform_resource_identifier</a></code> | <code>str</code> | Represents ``GeneralName`` as a URI. |

---

##### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.directoryName"></a>

```python
directory_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

Contains information about the certificate subject.

The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#directory_name AcmpcaCertificate#directory_name}

---

##### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

Represents ``GeneralName`` as a DNS name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#dns_name AcmpcaCertificate#dns_name}

---

##### `edi_party_name`<sup>Optional</sup> <a name="edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ediPartyName"></a>

```python
edi_party_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

Represents ``GeneralName`` as an ``EdiPartyName`` object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#edi_party_name AcmpcaCertificate#edi_party_name}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Represents ``GeneralName`` as an IPv4 or IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#ip_address AcmpcaCertificate#ip_address}

---

##### `other_name`<sup>Optional</sup> <a name="other_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.otherName"></a>

```python
other_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

Represents ``GeneralName`` using an ``OtherName`` object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#other_name AcmpcaCertificate#other_name}

---

##### `registered_id`<sup>Optional</sup> <a name="registered_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.registeredId"></a>

```python
registered_id: str
```

- *Type:* str

Represents ``GeneralName`` as an object identifier (OID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#registered_id AcmpcaCertificate#registered_id}

---

##### `rfc822_name`<sup>Optional</sup> <a name="rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.rfc822Name"></a>

```python
rfc822_name: str
```

- *Type:* str

Represents ``GeneralName`` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#rfc_822_name AcmpcaCertificate#rfc_822_name}

---

##### `uniform_resource_identifier`<sup>Optional</sup> <a name="uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames.property.uniformResourceIdentifier"></a>

```python
uniform_resource_identifier: str
```

- *Type:* str

Represents ``GeneralName`` as a URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#uniform_resource_identifier AcmpcaCertificate#uniform_resource_identifier}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes] = None,
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
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.commonName">common_name</a></code> | <code>str</code> | For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.country">country</a></code> | <code>str</code> | Two-digit code that specifies the country in which the certificate subject located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.customAttributes">custom_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]</code> | Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Disambiguating information for the certificate subject. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Typically a qualifier appended to the name of an individual. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.givenName">given_name</a></code> | <code>str</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.initials">initials</a></code> | <code>str</code> | Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.locality">locality</a></code> | <code>str</code> | The locality (such as a city or town) in which the certificate subject is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organization">organization</a></code> | <code>str</code> | Legal name of the organization with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.pseudonym">pseudonym</a></code> | <code>str</code> | Typically a shortened version of a longer *GivenName*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.serialNumber">serial_number</a></code> | <code>str</code> | The certificate serial number. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.state">state</a></code> | <code>str</code> | State in which the subject of the certificate is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.surname">surname</a></code> | <code>str</code> | Family name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.title">title</a></code> | <code>str</code> | A title such as Mr. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.

Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#common_name AcmpcaCertificate#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.country"></a>

```python
country: str
```

- *Type:* str

Two-digit code that specifies the country in which the certificate subject located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#country AcmpcaCertificate#country}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.customAttributes"></a>

```python
custom_attributes: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]

Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#custom_attributes AcmpcaCertificate#custom_attributes}

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Disambiguating information for the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Typically a qualifier appended to the name of an individual.

Examples include Jr. for junior, Sr. for senior, and III for third.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#generation_qualifier AcmpcaCertificate#generation_qualifier}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#given_name AcmpcaCertificate#given_name}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.initials"></a>

```python
initials: str
```

- *Type:* str

Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#initials AcmpcaCertificate#initials}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.locality"></a>

```python
locality: str
```

- *Type:* str

The locality (such as a city or town) in which the certificate subject is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#locality AcmpcaCertificate#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organization"></a>

```python
organization: str
```

- *Type:* str

Legal name of the organization with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organization AcmpcaCertificate#organization}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organizational_unit AcmpcaCertificate#organizational_unit}

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Typically a shortened version of a longer *GivenName*.

For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#pseudonym AcmpcaCertificate#pseudonym}

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

The certificate serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#serial_number AcmpcaCertificate#serial_number}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.state"></a>

```python
state: str
```

- *Type:* str

State in which the subject of the certificate is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#state AcmpcaCertificate#state}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.surname"></a>

```python
surname: str
```

- *Type:* str

Family name.

In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#surname AcmpcaCertificate#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName.property.title"></a>

```python
title: str
```

- *Type:* str

A title such as Mr.

or Ms., which is pre-pended to the name to refer formally to the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#title AcmpcaCertificate#title}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes(
  object_identifier: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.value">value</a></code> | <code>str</code> | Specifies the attribute value of relative distinguished name (RDN). |

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#object_identifier AcmpcaCertificate#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Specifies the attribute value of relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName(
  name_assigner: str = None,
  party_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.nameAssigner">name_assigner</a></code> | <code>str</code> | Specifies the name assigner. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.partyName">party_name</a></code> | <code>str</code> | Specifies the party name. |

---

##### `name_assigner`<sup>Optional</sup> <a name="name_assigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.nameAssigner"></a>

```python
name_assigner: str
```

- *Type:* str

Specifies the name assigner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#name_assigner AcmpcaCertificate#name_assigner}

---

##### `party_name`<sup>Optional</sup> <a name="party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName.property.partyName"></a>

```python
party_name: str
```

- *Type:* str

Specifies the party name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#party_name AcmpcaCertificate#party_name}

---

### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName(
  type_id: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.typeId">type_id</a></code> | <code>str</code> | Specifies an OID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.value">value</a></code> | <code>str</code> | Specifies an OID value. |

---

##### `type_id`<sup>Optional</sup> <a name="type_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.typeId"></a>

```python
type_id: str
```

- *Type:* str

Specifies an OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#type_id AcmpcaCertificate#type_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName.property.value"></a>

```python
value: str
```

- *Type:* str

Specifies an OID value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateApiPassthroughSubject <a name="AcmpcaCertificateApiPassthroughSubject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateApiPassthroughSubjectCustomAttributes] = None,
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
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.commonName">common_name</a></code> | <code>str</code> | For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.country">country</a></code> | <code>str</code> | Two-digit code that specifies the country in which the certificate subject located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.customAttributes">custom_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]</code> | Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | Disambiguating information for the certificate subject. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | Typically a qualifier appended to the name of an individual. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.givenName">given_name</a></code> | <code>str</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.initials">initials</a></code> | <code>str</code> | Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.locality">locality</a></code> | <code>str</code> | The locality (such as a city or town) in which the certificate subject is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organization">organization</a></code> | <code>str</code> | Legal name of the organization with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.pseudonym">pseudonym</a></code> | <code>str</code> | Typically a shortened version of a longer *GivenName*. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.serialNumber">serial_number</a></code> | <code>str</code> | The certificate serial number. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.state">state</a></code> | <code>str</code> | State in which the subject of the certificate is located. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.surname">surname</a></code> | <code>str</code> | Family name. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.title">title</a></code> | <code>str</code> | A title such as Mr. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.

Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#common_name AcmpcaCertificate#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.country"></a>

```python
country: str
```

- *Type:* str

Two-digit code that specifies the country in which the certificate subject located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#country AcmpcaCertificate#country}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.customAttributes"></a>

```python
custom_attributes: IResolvable | typing.List[AcmpcaCertificateApiPassthroughSubjectCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]

Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#custom_attributes AcmpcaCertificate#custom_attributes}

---

##### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

Disambiguating information for the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}

---

##### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

Typically a qualifier appended to the name of an individual.

Examples include Jr. for junior, Sr. for senior, and III for third.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#generation_qualifier AcmpcaCertificate#generation_qualifier}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#given_name AcmpcaCertificate#given_name}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.initials"></a>

```python
initials: str
```

- *Type:* str

Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#initials AcmpcaCertificate#initials}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

The locality (such as a city or town) in which the certificate subject is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#locality AcmpcaCertificate#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organization"></a>

```python
organization: str
```

- *Type:* str

Legal name of the organization with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organization AcmpcaCertificate#organization}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organizational_unit AcmpcaCertificate#organizational_unit}

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

Typically a shortened version of a longer *GivenName*.

For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#pseudonym AcmpcaCertificate#pseudonym}

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

The certificate serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#serial_number AcmpcaCertificate#serial_number}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.state"></a>

```python
state: str
```

- *Type:* str

State in which the subject of the certificate is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#state AcmpcaCertificate#state}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.surname"></a>

```python
surname: str
```

- *Type:* str

Family name.

In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#surname AcmpcaCertificate#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject.property.title"></a>

```python
title: str
```

- *Type:* str

A title such as Mr.

or Ms., which is pre-pended to the name to refer formally to the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#title AcmpcaCertificate#title}

---

### AcmpcaCertificateApiPassthroughSubjectCustomAttributes <a name="AcmpcaCertificateApiPassthroughSubjectCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes(
  object_identifier: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.value">value</a></code> | <code>str</code> | Specifies the attribute value of relative distinguished name (RDN). |

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#object_identifier AcmpcaCertificate#object_identifier}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Specifies the attribute value of relative distinguished name (RDN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateConfig <a name="AcmpcaCertificateConfig" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_authority_arn: str,
  certificate_signing_request: str,
  signing_algorithm: str,
  validity: AcmpcaCertificateValidity,
  api_passthrough: AcmpcaCertificateApiPassthrough = None,
  template_arn: str = None,
  validity_not_before: AcmpcaCertificateValidityNotBefore = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the private CA issues the certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest">certificate_signing_request</a></code> | <code>str</code> | The certificate signing request (CSR) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | The name of the algorithm that will be used to sign the certificate to be issued. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | The period of time during which the certificate will be valid. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.apiPassthrough">api_passthrough</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn">template_arn</a></code> | <code>str</code> | Specifies a custom configuration template to use when issuing a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validityNotBefore">validity_not_before</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | Information describing the start of the validity period of the certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the private CA issues the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}

---

##### `certificate_signing_request`<sup>Required</sup> <a name="certificate_signing_request" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest"></a>

```python
certificate_signing_request: str
```

- *Type:* str

The certificate signing request (CSR) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

The name of the algorithm that will be used to sign the certificate to be issued.

This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validity"></a>

```python
validity: AcmpcaCertificateValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

The period of time during which the certificate will be valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `api_passthrough`<sup>Optional</sup> <a name="api_passthrough" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.apiPassthrough"></a>

```python
api_passthrough: AcmpcaCertificateApiPassthrough
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#api_passthrough AcmpcaCertificate#api_passthrough}

---

##### `template_arn`<sup>Optional</sup> <a name="template_arn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

Specifies a custom configuration template to use when issuing a certificate.

If this parameter is not provided, PCAshort defaults to the `EndEntityCertificate/V1` template. For more information about PCAshort templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}

---

##### `validity_not_before`<sup>Optional</sup> <a name="validity_not_before" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateConfig.property.validityNotBefore"></a>

```python
validity_not_before: AcmpcaCertificateValidityNotBefore
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

Information describing the start of the validity period of the certificate.

This parameter sets the ?Not Before" date for the certificate.
By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the ?Not Before? value.
Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#validity_not_before AcmpcaCertificate#validity_not_before}

---

### AcmpcaCertificateValidity <a name="AcmpcaCertificateValidity" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateValidity(
  type: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.type">type</a></code> | <code>str</code> | Specifies whether the ``Value`` parameter represents days, months, or years. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.value">value</a></code> | <code>typing.Union[int, float]</code> | A long integer interpreted according to the value of ``Type``, below. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies whether the ``Value`` parameter represents days, months, or years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A long integer interpreted according to the value of ``Type``, below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

### AcmpcaCertificateValidityNotBefore <a name="AcmpcaCertificateValidityNotBefore" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateValidityNotBefore(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.type">type</a></code> | <code>str</code> | Specifies whether the ``Value`` parameter represents days, months, or years. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.value">value</a></code> | <code>typing.Union[int, float]</code> | A long integer interpreted according to the value of ``Type``, below. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies whether the ``Value`` parameter represents days, months, or years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A long integer interpreted according to the value of ``Type``, below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.putPolicyQualifiers">put_policy_qualifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetCertPolicyId">reset_cert_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetPolicyQualifiers">reset_policy_qualifiers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_qualifiers` <a name="put_policy_qualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.putPolicyQualifiers"></a>

```python
def put_policy_qualifiers(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.putPolicyQualifiers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]

---

##### `reset_cert_policy_id` <a name="reset_cert_policy_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetCertPolicyId"></a>

```python
def reset_cert_policy_id() -> None
```

##### `reset_policy_qualifiers` <a name="reset_policy_qualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.resetPolicyQualifiers"></a>

```python
def reset_policy_qualifiers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiers">policy_qualifiers</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyIdInput">cert_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiersInput">policy_qualifiers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyId">cert_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_qualifiers`<sup>Required</sup> <a name="policy_qualifiers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiers"></a>

```python
policy_qualifiers: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList</a>

---

##### `cert_policy_id_input`<sup>Optional</sup> <a name="cert_policy_id_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyIdInput"></a>

```python
cert_policy_id_input: str
```

- *Type:* str

---

##### `policy_qualifiers_input`<sup>Optional</sup> <a name="policy_qualifiers_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.policyQualifiersInput"></a>

```python
policy_qualifiers_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]

---

##### `cert_policy_id`<sup>Required</sup> <a name="cert_policy_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.certPolicyId"></a>

```python
cert_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>]

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.putQualifier">put_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetPolicyQualifierId">reset_policy_qualifier_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetQualifier">reset_qualifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_qualifier` <a name="put_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.putQualifier"></a>

```python
def put_qualifier(
  cps_uri: str = None
) -> None
```

###### `cps_uri`<sup>Optional</sup> <a name="cps_uri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.putQualifier.parameter.cpsUri"></a>

- *Type:* str

Contains a pointer to a certification practice statement (CPS) published by the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#cps_uri AcmpcaCertificate#cps_uri}

---

##### `reset_policy_qualifier_id` <a name="reset_policy_qualifier_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetPolicyQualifierId"></a>

```python
def reset_policy_qualifier_id() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.resetQualifier"></a>

```python
def reset_qualifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifier">qualifier</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierIdInput">policy_qualifier_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifierInput">qualifier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierId">policy_qualifier_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifier"></a>

```python
qualifier: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference</a>

---

##### `policy_qualifier_id_input`<sup>Optional</sup> <a name="policy_qualifier_id_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierIdInput"></a>

```python
policy_qualifier_id_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.qualifierInput"></a>

```python
qualifier_input: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

---

##### `policy_qualifier_id`<sup>Required</sup> <a name="policy_qualifier_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.policyQualifierId"></a>

```python
policy_qualifier_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers</a>

---


### AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resetCpsUri">reset_cps_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cps_uri` <a name="reset_cps_uri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.resetCpsUri"></a>

```python
def reset_cps_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUriInput">cps_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUri">cps_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cps_uri_input`<sup>Optional</sup> <a name="cps_uri_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUriInput"></a>

```python
cps_uri_input: str
```

- *Type:* str

---

##### `cps_uri`<sup>Required</sup> <a name="cps_uri" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.cpsUri"></a>

```python
cps_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier</a>

---


### AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList <a name="AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCustomExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]

---


### AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetCritical">reset_critical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetObjectIdentifier">reset_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_critical` <a name="reset_critical" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetCritical"></a>

```python
def reset_critical() -> None
```

##### `reset_object_identifier` <a name="reset_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetObjectIdentifier"></a>

```python
def reset_object_identifier() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.criticalInput">critical_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifierInput">object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.critical">critical</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical_input`<sup>Optional</sup> <a name="critical_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.criticalInput"></a>

```python
critical_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `object_identifier_input`<sup>Optional</sup> <a name="object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifierInput"></a>

```python
object_identifier_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.critical"></a>

```python
critical: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsCustomExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>

---


### AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList <a name="AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]

---


### AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageObjectIdentifier">reset_extended_key_usage_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageType">reset_extended_key_usage_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extended_key_usage_object_identifier` <a name="reset_extended_key_usage_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageObjectIdentifier"></a>

```python
def reset_extended_key_usage_object_identifier() -> None
```

##### `reset_extended_key_usage_type` <a name="reset_extended_key_usage_type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.resetExtendedKeyUsageType"></a>

```python
def reset_extended_key_usage_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifierInput">extended_key_usage_object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageTypeInput">extended_key_usage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifier">extended_key_usage_object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageType">extended_key_usage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extended_key_usage_object_identifier_input`<sup>Optional</sup> <a name="extended_key_usage_object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifierInput"></a>

```python
extended_key_usage_object_identifier_input: str
```

- *Type:* str

---

##### `extended_key_usage_type_input`<sup>Optional</sup> <a name="extended_key_usage_type_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageTypeInput"></a>

```python
extended_key_usage_type_input: str
```

- *Type:* str

---

##### `extended_key_usage_object_identifier`<sup>Required</sup> <a name="extended_key_usage_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageObjectIdentifier"></a>

```python
extended_key_usage_object_identifier: str
```

- *Type:* str

---

##### `extended_key_usage_type`<sup>Required</sup> <a name="extended_key_usage_type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.extendedKeyUsageType"></a>

```python
extended_key_usage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>

---


### AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetCrlSign">reset_crl_sign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDataEncipherment">reset_data_encipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDecipherOnly">reset_decipher_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDigitalSignature">reset_digital_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetEncipherOnly">reset_encipher_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyAgreement">reset_key_agreement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyCertSign">reset_key_cert_sign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyEncipherment">reset_key_encipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetNonRepudiation">reset_non_repudiation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crl_sign` <a name="reset_crl_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetCrlSign"></a>

```python
def reset_crl_sign() -> None
```

##### `reset_data_encipherment` <a name="reset_data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDataEncipherment"></a>

```python
def reset_data_encipherment() -> None
```

##### `reset_decipher_only` <a name="reset_decipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDecipherOnly"></a>

```python
def reset_decipher_only() -> None
```

##### `reset_digital_signature` <a name="reset_digital_signature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetDigitalSignature"></a>

```python
def reset_digital_signature() -> None
```

##### `reset_encipher_only` <a name="reset_encipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetEncipherOnly"></a>

```python
def reset_encipher_only() -> None
```

##### `reset_key_agreement` <a name="reset_key_agreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyAgreement"></a>

```python
def reset_key_agreement() -> None
```

##### `reset_key_cert_sign` <a name="reset_key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyCertSign"></a>

```python
def reset_key_cert_sign() -> None
```

##### `reset_key_encipherment` <a name="reset_key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetKeyEncipherment"></a>

```python
def reset_key_encipherment() -> None
```

##### `reset_non_repudiation` <a name="reset_non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.resetNonRepudiation"></a>

```python
def reset_non_repudiation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSignInput">crl_sign_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEnciphermentInput">data_encipherment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnlyInput">decipher_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignatureInput">digital_signature_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnlyInput">encipher_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreementInput">key_agreement_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSignInput">key_cert_sign_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEnciphermentInput">key_encipherment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiationInput">non_repudiation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSign">crl_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnly">decipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignature">digital_signature</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnly">encipher_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreement">key_agreement</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSign">key_cert_sign</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiation">non_repudiation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crl_sign_input`<sup>Optional</sup> <a name="crl_sign_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSignInput"></a>

```python
crl_sign_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_encipherment_input`<sup>Optional</sup> <a name="data_encipherment_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```python
data_encipherment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `decipher_only_input`<sup>Optional</sup> <a name="decipher_only_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnlyInput"></a>

```python
decipher_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `digital_signature_input`<sup>Optional</sup> <a name="digital_signature_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignatureInput"></a>

```python
digital_signature_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encipher_only_input`<sup>Optional</sup> <a name="encipher_only_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnlyInput"></a>

```python
encipher_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_agreement_input`<sup>Optional</sup> <a name="key_agreement_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreementInput"></a>

```python
key_agreement_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_cert_sign_input`<sup>Optional</sup> <a name="key_cert_sign_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSignInput"></a>

```python
key_cert_sign_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_encipherment_input`<sup>Optional</sup> <a name="key_encipherment_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```python
key_encipherment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `non_repudiation_input`<sup>Optional</sup> <a name="non_repudiation_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiationInput"></a>

```python
non_repudiation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `crl_sign`<sup>Required</sup> <a name="crl_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.crlSign"></a>

```python
crl_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `decipher_only`<sup>Required</sup> <a name="decipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```python
decipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```python
digital_signature: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encipher_only`<sup>Required</sup> <a name="encipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```python
encipher_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```python
key_agreement: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_cert_sign`<sup>Required</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```python
key_cert_sign: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `non_repudiation`<sup>Required</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```python
non_repudiation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsKeyUsage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

---


### AcmpcaCertificateApiPassthroughExtensionsOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCertificatePolicies">put_certificate_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCustomExtensions">put_custom_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putExtendedKeyUsage">put_extended_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage">put_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putSubjectAlternativeNames">put_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCertificatePolicies">reset_certificate_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCustomExtensions">reset_custom_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetExtendedKeyUsage">reset_extended_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetKeyUsage">reset_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_policies` <a name="put_certificate_policies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCertificatePolicies"></a>

```python
def put_certificate_policies(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCertificatePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]

---

##### `put_custom_extensions` <a name="put_custom_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCustomExtensions"></a>

```python
def put_custom_extensions(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCustomExtensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putCustomExtensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]

---

##### `put_extended_key_usage` <a name="put_extended_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putExtendedKeyUsage"></a>

```python
def put_extended_key_usage(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]

---

##### `put_key_usage` <a name="put_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage"></a>

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

###### `crl_sign`<sup>Optional</sup> <a name="crl_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.crlSign"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used to sign CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#crl_sign AcmpcaCertificate#crl_sign}

---

###### `data_encipherment`<sup>Optional</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.dataEncipherment"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used to decipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#data_encipherment AcmpcaCertificate#data_encipherment}

---

###### `decipher_only`<sup>Optional</sup> <a name="decipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.decipherOnly"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used only to decipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#decipher_only AcmpcaCertificate#decipher_only}

---

###### `digital_signature`<sup>Optional</sup> <a name="digital_signature" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.digitalSignature"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used for digital signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#digital_signature AcmpcaCertificate#digital_signature}

---

###### `encipher_only`<sup>Optional</sup> <a name="encipher_only" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.encipherOnly"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used only to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#encipher_only AcmpcaCertificate#encipher_only}

---

###### `key_agreement`<sup>Optional</sup> <a name="key_agreement" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.keyAgreement"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used in a key-agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_agreement AcmpcaCertificate#key_agreement}

---

###### `key_cert_sign`<sup>Optional</sup> <a name="key_cert_sign" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.keyCertSign"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_cert_sign AcmpcaCertificate#key_cert_sign}

---

###### `key_encipherment`<sup>Optional</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.keyEncipherment"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_encipherment AcmpcaCertificate#key_encipherment}

---

###### `non_repudiation`<sup>Optional</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putKeyUsage.parameter.nonRepudiation"></a>

- *Type:* bool | cdktn.IResolvable

Key can be used for non-repudiation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#non_repudiation AcmpcaCertificate#non_repudiation}

---

##### `put_subject_alternative_names` <a name="put_subject_alternative_names" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putSubjectAlternativeNames"></a>

```python
def put_subject_alternative_names(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]

---

##### `reset_certificate_policies` <a name="reset_certificate_policies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCertificatePolicies"></a>

```python
def reset_certificate_policies() -> None
```

##### `reset_custom_extensions` <a name="reset_custom_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetCustomExtensions"></a>

```python
def reset_custom_extensions() -> None
```

##### `reset_extended_key_usage` <a name="reset_extended_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetExtendedKeyUsage"></a>

```python
def reset_extended_key_usage() -> None
```

##### `reset_key_usage` <a name="reset_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetKeyUsage"></a>

```python
def reset_key_usage() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePolicies">certificate_policies</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensions">custom_extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList">AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference">AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePoliciesInput">certificate_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensionsInput">custom_extensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsageInput">extended_key_usage_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsageInput">key_usage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_policies`<sup>Required</sup> <a name="certificate_policies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePolicies"></a>

```python
certificate_policies: AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList">AcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList</a>

---

##### `custom_extensions`<sup>Required</sup> <a name="custom_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensions"></a>

```python
custom_extensions: AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList">AcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList</a>

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsage"></a>

```python
key_usage: AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference">AcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference</a>

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList</a>

---

##### `certificate_policies_input`<sup>Optional</sup> <a name="certificate_policies_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.certificatePoliciesInput"></a>

```python
certificate_policies_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]

---

##### `custom_extensions_input`<sup>Optional</sup> <a name="custom_extensions_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.customExtensionsInput"></a>

```python
custom_extensions_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCustomExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]

---

##### `extended_key_usage_input`<sup>Optional</sup> <a name="extended_key_usage_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.extendedKeyUsageInput"></a>

```python
extended_key_usage_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.keyUsageInput"></a>

```python
key_usage_input: IResolvable | AcmpcaCertificateApiPassthroughExtensionsKeyUsage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier">reset_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_identifier` <a name="reset_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier"></a>

```python
def reset_object_identifier() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput">object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_identifier_input`<sup>Optional</sup> <a name="object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```python
object_identifier_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.putCustomAttributes">put_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_attributes` <a name="put_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.putCustomAttributes"></a>

```python
def put_custom_attributes(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]

---

##### `reset_common_name` <a name="reset_common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributes"></a>

```python
custom_attributes: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList</a>

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetNameAssigner">reset_name_assigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetPartyName">reset_party_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name_assigner` <a name="reset_name_assigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetNameAssigner"></a>

```python
def reset_name_assigner() -> None
```

##### `reset_party_name` <a name="reset_party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.resetPartyName"></a>

```python
def reset_party_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssignerInput">name_assigner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyNameInput">party_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssigner">name_assigner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyName">party_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_assigner_input`<sup>Optional</sup> <a name="name_assigner_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssignerInput"></a>

```python
name_assigner_input: str
```

- *Type:* str

---

##### `party_name_input`<sup>Optional</sup> <a name="party_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyNameInput"></a>

```python
party_name_input: str
```

- *Type:* str

---

##### `name_assigner`<sup>Required</sup> <a name="name_assigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.nameAssigner"></a>

```python
name_assigner: str
```

- *Type:* str

---

##### `party_name`<sup>Required</sup> <a name="party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.partyName"></a>

```python
party_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetTypeId">reset_type_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type_id` <a name="reset_type_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetTypeId"></a>

```python
def reset_type_id() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeIdInput">type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeId">type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_id_input`<sup>Optional</sup> <a name="type_id_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeIdInput"></a>

```python
type_id_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type_id`<sup>Required</sup> <a name="type_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.typeId"></a>

```python
type_id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

---


### AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference <a name="AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName">put_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName">put_edi_party_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName">put_other_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDirectoryName">reset_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDnsName">reset_dns_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetEdiPartyName">reset_edi_party_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetOtherName">reset_other_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRegisteredId">reset_registered_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRfc822Name">reset_rfc822_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetUniformResourceIdentifier">reset_uniform_resource_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_directory_name` <a name="put_directory_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName"></a>

```python
def put_directory_name(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes] = None,
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

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.commonName"></a>

- *Type:* str

For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.

Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#common_name AcmpcaCertificate#common_name}

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.country"></a>

- *Type:* str

Two-digit code that specifies the country in which the certificate subject located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#country AcmpcaCertificate#country}

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.customAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes</a>]

Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#custom_attributes AcmpcaCertificate#custom_attributes}

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Disambiguating information for the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.generationQualifier"></a>

- *Type:* str

Typically a qualifier appended to the name of an individual.

Examples include Jr. for junior, Sr. for senior, and III for third.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#generation_qualifier AcmpcaCertificate#generation_qualifier}

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.givenName"></a>

- *Type:* str

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#given_name AcmpcaCertificate#given_name}

---

###### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.initials"></a>

- *Type:* str

Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#initials AcmpcaCertificate#initials}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.locality"></a>

- *Type:* str

The locality (such as a city or town) in which the certificate subject is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#locality AcmpcaCertificate#locality}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.organization"></a>

- *Type:* str

Legal name of the organization with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organization AcmpcaCertificate#organization}

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.organizationalUnit"></a>

- *Type:* str

A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organizational_unit AcmpcaCertificate#organizational_unit}

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.pseudonym"></a>

- *Type:* str

Typically a shortened version of a longer *GivenName*.

For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#pseudonym AcmpcaCertificate#pseudonym}

---

###### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.serialNumber"></a>

- *Type:* str

The certificate serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#serial_number AcmpcaCertificate#serial_number}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.state"></a>

- *Type:* str

State in which the subject of the certificate is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#state AcmpcaCertificate#state}

---

###### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.surname"></a>

- *Type:* str

Family name.

In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#surname AcmpcaCertificate#surname}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putDirectoryName.parameter.title"></a>

- *Type:* str

A title such as Mr.

or Ms., which is pre-pended to the name to refer formally to the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#title AcmpcaCertificate#title}

---

##### `put_edi_party_name` <a name="put_edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName"></a>

```python
def put_edi_party_name(
  name_assigner: str = None,
  party_name: str = None
) -> None
```

###### `name_assigner`<sup>Optional</sup> <a name="name_assigner" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName.parameter.nameAssigner"></a>

- *Type:* str

Specifies the name assigner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#name_assigner AcmpcaCertificate#name_assigner}

---

###### `party_name`<sup>Optional</sup> <a name="party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putEdiPartyName.parameter.partyName"></a>

- *Type:* str

Specifies the party name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#party_name AcmpcaCertificate#party_name}

---

##### `put_other_name` <a name="put_other_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName"></a>

```python
def put_other_name(
  type_id: str = None,
  value: str = None
) -> None
```

###### `type_id`<sup>Optional</sup> <a name="type_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName.parameter.typeId"></a>

- *Type:* str

Specifies an OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#type_id AcmpcaCertificate#type_id}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.putOtherName.parameter.value"></a>

- *Type:* str

Specifies an OID value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}

---

##### `reset_directory_name` <a name="reset_directory_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDirectoryName"></a>

```python
def reset_directory_name() -> None
```

##### `reset_dns_name` <a name="reset_dns_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetDnsName"></a>

```python
def reset_dns_name() -> None
```

##### `reset_edi_party_name` <a name="reset_edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetEdiPartyName"></a>

```python
def reset_edi_party_name() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_other_name` <a name="reset_other_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetOtherName"></a>

```python
def reset_other_name() -> None
```

##### `reset_registered_id` <a name="reset_registered_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRegisteredId"></a>

```python
def reset_registered_id() -> None
```

##### `reset_rfc822_name` <a name="reset_rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetRfc822Name"></a>

```python
def reset_rfc822_name() -> None
```

##### `reset_uniform_resource_identifier` <a name="reset_uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.resetUniformResourceIdentifier"></a>

```python
def reset_uniform_resource_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryName">directory_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyName">edi_party_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherName">other_name</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryNameInput">directory_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyNameInput">edi_party_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherNameInput">other_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredIdInput">registered_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822NameInput">rfc822_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifierInput">uniform_resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredId">registered_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822Name">rfc822_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifier">uniform_resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryName"></a>

```python
directory_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference</a>

---

##### `edi_party_name`<sup>Required</sup> <a name="edi_party_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyName"></a>

```python
edi_party_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference</a>

---

##### `other_name`<sup>Required</sup> <a name="other_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherName"></a>

```python
other_name: AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference</a>

---

##### `directory_name_input`<sup>Optional</sup> <a name="directory_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.directoryNameInput"></a>

```python
directory_name_input: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName</a>

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `edi_party_name_input`<sup>Optional</sup> <a name="edi_party_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ediPartyNameInput"></a>

```python
edi_party_name_input: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName</a>

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `other_name_input`<sup>Optional</sup> <a name="other_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.otherNameInput"></a>

```python
other_name_input: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName</a>

---

##### `registered_id_input`<sup>Optional</sup> <a name="registered_id_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredIdInput"></a>

```python
registered_id_input: str
```

- *Type:* str

---

##### `rfc822_name_input`<sup>Optional</sup> <a name="rfc822_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822NameInput"></a>

```python
rfc822_name_input: str
```

- *Type:* str

---

##### `uniform_resource_identifier_input`<sup>Optional</sup> <a name="uniform_resource_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifierInput"></a>

```python
uniform_resource_identifier_input: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `registered_id`<sup>Required</sup> <a name="registered_id" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.registeredId"></a>

```python
registered_id: str
```

- *Type:* str

---

##### `rfc822_name`<sup>Required</sup> <a name="rfc822_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.rfc822Name"></a>

```python
rfc822_name: str
```

- *Type:* str

---

##### `uniform_resource_identifier`<sup>Required</sup> <a name="uniform_resource_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.uniformResourceIdentifier"></a>

```python
uniform_resource_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>

---


### AcmpcaCertificateApiPassthroughOutputReference <a name="AcmpcaCertificateApiPassthroughOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetExtensions">reset_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extensions` <a name="put_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions"></a>

```python
def put_extensions(
  certificate_policies: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies] = None,
  custom_extensions: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsCustomExtensions] = None,
  extended_key_usage: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage] = None,
  key_usage: AcmpcaCertificateApiPassthroughExtensionsKeyUsage = None,
  subject_alternative_names: IResolvable | typing.List[AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames] = None
) -> None
```

###### `certificate_policies`<sup>Optional</sup> <a name="certificate_policies" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions.parameter.certificatePolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies">AcmpcaCertificateApiPassthroughExtensionsCertificatePolicies</a>]

Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers.

For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#certificate_policies AcmpcaCertificate#certificate_policies}

---

###### `custom_extensions`<sup>Optional</sup> <a name="custom_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions.parameter.customExtensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsCustomExtensions">AcmpcaCertificateApiPassthroughExtensionsCustomExtensions</a>]

Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#custom_extensions AcmpcaCertificate#custom_extensions}

---

###### `extended_key_usage`<sup>Optional</sup> <a name="extended_key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions.parameter.extendedKeyUsage"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage">AcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage</a>]

Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#extended_key_usage AcmpcaCertificate#extended_key_usage}

---

###### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions.parameter.keyUsage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsKeyUsage">AcmpcaCertificateApiPassthroughExtensionsKeyUsage</a>

Defines one or more purposes for which the key contained in the certificate can be used.

Default value for each option is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#key_usage AcmpcaCertificate#key_usage}

---

###### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putExtensions.parameter.subjectAlternativeNames"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames">AcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames</a>]

The subject alternative name extension allows identities to be bound to the subject of the certificate.

These identities may be included in addition to or in place of the identity in the subject field of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#subject_alternative_names AcmpcaCertificate#subject_alternative_names}

---

##### `put_subject` <a name="put_subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject"></a>

```python
def put_subject(
  common_name: str = None,
  country: str = None,
  custom_attributes: IResolvable | typing.List[AcmpcaCertificateApiPassthroughSubjectCustomAttributes] = None,
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

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.commonName"></a>

- *Type:* str

For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.

Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#common_name AcmpcaCertificate#common_name}

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.country"></a>

- *Type:* str

Two-digit code that specifies the country in which the certificate subject located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#country AcmpcaCertificate#country}

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.customAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]

Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).   Custom attributes cannot be used in combination with standard attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#custom_attributes AcmpcaCertificate#custom_attributes}

---

###### `distinguished_name_qualifier`<sup>Optional</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.distinguishedNameQualifier"></a>

- *Type:* str

Disambiguating information for the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#distinguished_name_qualifier AcmpcaCertificate#distinguished_name_qualifier}

---

###### `generation_qualifier`<sup>Optional</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.generationQualifier"></a>

- *Type:* str

Typically a qualifier appended to the name of an individual.

Examples include Jr. for junior, Sr. for senior, and III for third.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#generation_qualifier AcmpcaCertificate#generation_qualifier}

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.givenName"></a>

- *Type:* str

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#given_name AcmpcaCertificate#given_name}

---

###### `initials`<sup>Optional</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.initials"></a>

- *Type:* str

Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#initials AcmpcaCertificate#initials}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.locality"></a>

- *Type:* str

The locality (such as a city or town) in which the certificate subject is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#locality AcmpcaCertificate#locality}

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.organization"></a>

- *Type:* str

Legal name of the organization with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organization AcmpcaCertificate#organization}

---

###### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.organizationalUnit"></a>

- *Type:* str

A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#organizational_unit AcmpcaCertificate#organizational_unit}

---

###### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.pseudonym"></a>

- *Type:* str

Typically a shortened version of a longer *GivenName*.

For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#pseudonym AcmpcaCertificate#pseudonym}

---

###### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.serialNumber"></a>

- *Type:* str

The certificate serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#serial_number AcmpcaCertificate#serial_number}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.state"></a>

- *Type:* str

State in which the subject of the certificate is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#state AcmpcaCertificate#state}

---

###### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.surname"></a>

- *Type:* str

Family name.

In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#surname AcmpcaCertificate#surname}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.putSubject.parameter.title"></a>

- *Type:* str

A title such as Mr.

or Ms., which is pre-pended to the name to refer formally to the certificate subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate#title AcmpcaCertificate#title}

---

##### `reset_extensions` <a name="reset_extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetExtensions"></a>

```python
def reset_extensions() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference">AcmpcaCertificateApiPassthroughExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference">AcmpcaCertificateApiPassthroughSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensionsInput">extensions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subjectInput">subject_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensions"></a>

```python
extensions: AcmpcaCertificateApiPassthroughExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensionsOutputReference">AcmpcaCertificateApiPassthroughExtensionsOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subject"></a>

```python
subject: AcmpcaCertificateApiPassthroughSubjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference">AcmpcaCertificateApiPassthroughSubjectOutputReference</a>

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.extensionsInput"></a>

```python
extensions_input: IResolvable | AcmpcaCertificateApiPassthroughExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughExtensions">AcmpcaCertificateApiPassthroughExtensions</a>

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.subjectInput"></a>

```python
subject_input: IResolvable | AcmpcaCertificateApiPassthroughSubject
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthrough
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthrough">AcmpcaCertificateApiPassthrough</a>

---


### AcmpcaCertificateApiPassthroughSubjectCustomAttributesList <a name="AcmpcaCertificateApiPassthroughSubjectCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughSubjectCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]

---


### AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference <a name="AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetObjectIdentifier">reset_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_identifier` <a name="reset_object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetObjectIdentifier"></a>

```python
def reset_object_identifier() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifierInput">object_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifier">object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_identifier_input`<sup>Optional</sup> <a name="object_identifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```python
object_identifier_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```python
object_identifier: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughSubjectCustomAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>

---


### AcmpcaCertificateApiPassthroughSubjectOutputReference <a name="AcmpcaCertificateApiPassthroughSubjectOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.putCustomAttributes">put_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetDistinguishedNameQualifier">reset_distinguished_name_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGenerationQualifier">reset_generation_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetPseudonym">reset_pseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_attributes` <a name="put_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.putCustomAttributes"></a>

```python
def put_custom_attributes(
  value: IResolvable | typing.List[AcmpcaCertificateApiPassthroughSubjectCustomAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]

---

##### `reset_common_name` <a name="reset_common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_distinguished_name_qualifier` <a name="reset_distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```python
def reset_distinguished_name_qualifier() -> None
```

##### `reset_generation_qualifier` <a name="reset_generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGenerationQualifier"></a>

```python
def reset_generation_qualifier() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_pseudonym` <a name="reset_pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetPseudonym"></a>

```python
def reset_pseudonym() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList">AcmpcaCertificateApiPassthroughSubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifierInput">distinguished_name_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifierInput">generation_qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonymInput">pseudonym_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifier">distinguished_name_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifier">generation_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributes"></a>

```python
custom_attributes: AcmpcaCertificateApiPassthroughSubjectCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributesList">AcmpcaCertificateApiPassthroughSubjectCustomAttributesList</a>

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: IResolvable | typing.List[AcmpcaCertificateApiPassthroughSubjectCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectCustomAttributes">AcmpcaCertificateApiPassthroughSubjectCustomAttributes</a>]

---

##### `distinguished_name_qualifier_input`<sup>Optional</sup> <a name="distinguished_name_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```python
distinguished_name_qualifier_input: str
```

- *Type:* str

---

##### `generation_qualifier_input`<sup>Optional</sup> <a name="generation_qualifier_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifierInput"></a>

```python
generation_qualifier_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pseudonym_input`<sup>Optional</sup> <a name="pseudonym_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonymInput"></a>

```python
pseudonym_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `distinguished_name_qualifier`<sup>Required</sup> <a name="distinguished_name_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.distinguishedNameQualifier"></a>

```python
distinguished_name_qualifier: str
```

- *Type:* str

---

##### `generation_qualifier`<sup>Required</sup> <a name="generation_qualifier" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.generationQualifier"></a>

```python
generation_qualifier: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.pseudonym"></a>

```python
pseudonym: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubjectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateApiPassthroughSubject
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateApiPassthroughSubject">AcmpcaCertificateApiPassthroughSubject</a>

---


### AcmpcaCertificateValidityNotBeforeOutputReference <a name="AcmpcaCertificateValidityNotBeforeOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBeforeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateValidityNotBefore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityNotBefore">AcmpcaCertificateValidityNotBefore</a>

---


### AcmpcaCertificateValidityOutputReference <a name="AcmpcaCertificateValidityOutputReference" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate

acmpcaCertificate.AcmpcaCertificateValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AcmpcaCertificateValidity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---



