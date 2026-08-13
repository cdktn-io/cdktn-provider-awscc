# `iotCaCertificate` Submodule <a name="`iotCaCertificate` Submodule" id="@cdktn/provider-awscc.iotCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCaCertificate <a name="IotCaCertificate" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate awscc_iot_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ca_certificate_pem: str,
  status: str,
  auto_registration_status: str = None,
  certificate_mode: str = None,
  registration_config: IotCaCertificateRegistrationConfig = None,
  remove_auto_registration: bool | IResolvable = None,
  tags: IResolvable | typing.List[IotCaCertificateTags] = None,
  verification_certificate_pem: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.caCertificatePem">ca_certificate_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.autoRegistrationStatus">auto_registration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.certificateMode">certificate_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.registrationConfig">registration_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.removeAutoRegistration">remove_auto_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.verificationCertificatePem">verification_certificate_pem</a></code> | <code>str</code> | The private key verification certificate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_certificate_pem`<sup>Required</sup> <a name="ca_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.caCertificatePem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}.

---

##### `auto_registration_status`<sup>Optional</sup> <a name="auto_registration_status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.autoRegistrationStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}.

---

##### `certificate_mode`<sup>Optional</sup> <a name="certificate_mode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.certificateMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `registration_config`<sup>Optional</sup> <a name="registration_config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.registrationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}.

---

##### `remove_auto_registration`<sup>Optional</sup> <a name="remove_auto_registration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.removeAutoRegistration"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}

---

##### `verification_certificate_pem`<sup>Optional</sup> <a name="verification_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.verificationCertificatePem"></a>

- *Type:* str

The private key verification certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig">put_registration_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus">reset_auto_registration_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode">reset_certificate_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig">reset_registration_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration">reset_remove_auto_registration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem">reset_verification_certificate_pem</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_registration_config` <a name="put_registration_config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig"></a>

```python
def put_registration_config(
  role_arn: str = None,
  template_body: str = None,
  template_name: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}.

---

###### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.templateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}.

---

###### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.templateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotCaCertificateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]

---

##### `reset_auto_registration_status` <a name="reset_auto_registration_status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus"></a>

```python
def reset_auto_registration_status() -> None
```

##### `reset_certificate_mode` <a name="reset_certificate_mode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode"></a>

```python
def reset_certificate_mode() -> None
```

##### `reset_registration_config` <a name="reset_registration_config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig"></a>

```python
def reset_registration_config() -> None
```

##### `reset_remove_auto_registration` <a name="reset_remove_auto_registration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration"></a>

```python
def reset_remove_auto_registration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_verification_certificate_pem` <a name="reset_verification_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem"></a>

```python
def reset_verification_certificate_pem() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotCaCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig">registration_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput">auto_registration_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput">ca_certificate_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput">certificate_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput">registration_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput">remove_auto_registration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput">verification_certificate_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus">auto_registration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem">ca_certificate_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode">certificate_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration">remove_auto_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem">verification_certificate_pem</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ca_certificate_id`<sup>Required</sup> <a name="ca_certificate_id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `registration_config`<sup>Required</sup> <a name="registration_config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig"></a>

```python
registration_config: IotCaCertificateRegistrationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags"></a>

```python
tags: IotCaCertificateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a>

---

##### `auto_registration_status_input`<sup>Optional</sup> <a name="auto_registration_status_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput"></a>

```python
auto_registration_status_input: str
```

- *Type:* str

---

##### `ca_certificate_pem_input`<sup>Optional</sup> <a name="ca_certificate_pem_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput"></a>

```python
ca_certificate_pem_input: str
```

- *Type:* str

---

##### `certificate_mode_input`<sup>Optional</sup> <a name="certificate_mode_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput"></a>

```python
certificate_mode_input: str
```

- *Type:* str

---

##### `registration_config_input`<sup>Optional</sup> <a name="registration_config_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput"></a>

```python
registration_config_input: IResolvable | IotCaCertificateRegistrationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `remove_auto_registration_input`<sup>Optional</sup> <a name="remove_auto_registration_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput"></a>

```python
remove_auto_registration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotCaCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]

---

##### `verification_certificate_pem_input`<sup>Optional</sup> <a name="verification_certificate_pem_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput"></a>

```python
verification_certificate_pem_input: str
```

- *Type:* str

---

##### `auto_registration_status`<sup>Required</sup> <a name="auto_registration_status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus"></a>

```python
auto_registration_status: str
```

- *Type:* str

---

##### `ca_certificate_pem`<sup>Required</sup> <a name="ca_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem"></a>

```python
ca_certificate_pem: str
```

- *Type:* str

---

##### `certificate_mode`<sup>Required</sup> <a name="certificate_mode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode"></a>

```python
certificate_mode: str
```

- *Type:* str

---

##### `remove_auto_registration`<sup>Required</sup> <a name="remove_auto_registration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration"></a>

```python
remove_auto_registration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `verification_certificate_pem`<sup>Required</sup> <a name="verification_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem"></a>

```python
verification_certificate_pem: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotCaCertificateConfig <a name="IotCaCertificateConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ca_certificate_pem: str,
  status: str,
  auto_registration_status: str = None,
  certificate_mode: str = None,
  registration_config: IotCaCertificateRegistrationConfig = None,
  remove_auto_registration: bool | IResolvable = None,
  tags: IResolvable | typing.List[IotCaCertificateTags] = None,
  verification_certificate_pem: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem">ca_certificate_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus">auto_registration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode">certificate_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig">registration_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration">remove_auto_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem">verification_certificate_pem</a></code> | <code>str</code> | The private key verification certificate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ca_certificate_pem`<sup>Required</sup> <a name="ca_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem"></a>

```python
ca_certificate_pem: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}.

---

##### `auto_registration_status`<sup>Optional</sup> <a name="auto_registration_status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus"></a>

```python
auto_registration_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}.

---

##### `certificate_mode`<sup>Optional</sup> <a name="certificate_mode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode"></a>

```python
certificate_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `registration_config`<sup>Optional</sup> <a name="registration_config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig"></a>

```python
registration_config: IotCaCertificateRegistrationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}.

---

##### `remove_auto_registration`<sup>Optional</sup> <a name="remove_auto_registration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration"></a>

```python
remove_auto_registration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotCaCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}

---

##### `verification_certificate_pem`<sup>Optional</sup> <a name="verification_certificate_pem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem"></a>

```python
verification_certificate_pem: str
```

- *Type:* str

The private key verification certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}

---

### IotCaCertificateRegistrationConfig <a name="IotCaCertificateRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificateRegistrationConfig(
  role_arn: str = None,
  template_body: str = None,
  template_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}.

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}.

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}.

---

### IotCaCertificateTags <a name="IotCaCertificateTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#key IotCaCertificate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#value IotCaCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCaCertificateRegistrationConfigOutputReference <a name="IotCaCertificateRegistrationConfigOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName">reset_template_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName"></a>

```python
def reset_template_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCaCertificateRegistrationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---


### IotCaCertificateTagsList <a name="IotCaCertificateTagsList" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotCaCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotCaCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>]

---


### IotCaCertificateTagsOutputReference <a name="IotCaCertificateTagsOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ca_certificate

iotCaCertificate.IotCaCertificateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCaCertificateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>

---



