# `acmpcaCertificateAuthorityActivation` Submodule <a name="`acmpcaCertificateAuthorityActivation` Submodule" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthorityActivation <a name="AcmpcaCertificateAuthorityActivation" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation awscc_acmpca_certificate_authority_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority_activation

acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate: str,
  certificate_authority_arn: str,
  certificate_chain: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Certificate Authority certificate that will be installed in the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Arn of the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.certificateChain">certificate_chain</a></code> | <code>str</code> | Certificate chain for the Certificate Authority certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the Certificate Authority. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.certificate"></a>

- *Type:* str

Certificate Authority certificate that will be installed in the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#certificate AcmpcaCertificateAuthorityActivation#certificate}

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* str

Arn of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#certificate_authority_arn AcmpcaCertificateAuthorityActivation#certificate_authority_arn}

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.certificateChain"></a>

- *Type:* str

Certificate chain for the Certificate Authority certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#certificate_chain AcmpcaCertificateAuthorityActivation#certificate_chain}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.status"></a>

- *Type:* str

The status of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#status AcmpcaCertificateAuthorityActivation#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetCertificateChain">reset_certificate_chain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_certificate_chain` <a name="reset_certificate_chain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetCertificateChain"></a>

```python
def reset_certificate_chain() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AcmpcaCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority_activation

acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority_activation

acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority_activation

acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority_activation

acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AcmpcaCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AcmpcaCertificateAuthorityActivation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AcmpcaCertificateAuthorityActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificateAuthorityActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.completeCertificateChain">complete_certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `complete_certificate_chain`<sup>Required</sup> <a name="complete_certificate_chain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.completeCertificateChain"></a>

```python
complete_certificate_chain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityActivationConfig <a name="AcmpcaCertificateAuthorityActivationConfig" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import acmpca_certificate_authority_activation

acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate: str,
  certificate_authority_arn: str,
  certificate_chain: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificate">certificate</a></code> | <code>str</code> | Certificate Authority certificate that will be installed in the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Arn of the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Certificate chain for the Certificate Authority certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.status">status</a></code> | <code>str</code> | The status of the Certificate Authority. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Certificate Authority certificate that will be installed in the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#certificate AcmpcaCertificateAuthorityActivation#certificate}

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

Arn of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#certificate_authority_arn AcmpcaCertificateAuthorityActivation#certificate_authority_arn}

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Certificate chain for the Certificate Authority certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#certificate_chain AcmpcaCertificateAuthorityActivation#certificate_chain}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority_activation#status AcmpcaCertificateAuthorityActivation#status}

---



