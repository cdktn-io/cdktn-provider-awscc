# `certificatemanagerAcmeEndpoint` Submodule <a name="`certificatemanagerAcmeEndpoint` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeEndpoint <a name="CertificatemanagerAcmeEndpoint" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorization_behavior: str,
  certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthority,
  certificate_tags: IResolvable | typing.List[CertificatemanagerAcmeEndpointCertificateTags] = None,
  contact: str = None,
  tags: IResolvable | typing.List[CertificatemanagerAcmeEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.authorizationBehavior">authorization_behavior</a></code> | <code>str</code> | The authorization behavior for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.certificateAuthority">certificate_authority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | The certificate authority configuration for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.certificateTags">certificate_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]</code> | Tags applied to certificates issued via this endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.contact">contact</a></code> | <code>str</code> | Whether contact information is required for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]</code> | Tags associated with the ACME endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization_behavior`<sup>Required</sup> <a name="authorization_behavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.authorizationBehavior"></a>

- *Type:* str

The authorization behavior for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#authorization_behavior CertificatemanagerAcmeEndpoint#authorization_behavior}

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.certificateAuthority"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

The certificate authority configuration for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#certificate_authority CertificatemanagerAcmeEndpoint#certificate_authority}

---

##### `certificate_tags`<sup>Optional</sup> <a name="certificate_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.certificateTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]

Tags applied to certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#certificate_tags CertificatemanagerAcmeEndpoint#certificate_tags}

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.contact"></a>

- *Type:* str

Whether contact information is required for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#contact CertificatemanagerAcmeEndpoint#contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]

Tags associated with the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#tags CertificatemanagerAcmeEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority">put_certificate_authority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags">put_certificate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags">reset_certificate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact">reset_contact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_authority` <a name="put_certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority"></a>

```python
def put_certificate_authority(
  public_certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
) -> None
```

###### `public_certificate_authority`<sup>Required</sup> <a name="public_certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority.parameter.publicCertificateAuthority"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

Configuration for the public certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#public_certificate_authority CertificatemanagerAcmeEndpoint#public_certificate_authority}

---

##### `put_certificate_tags` <a name="put_certificate_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags"></a>

```python
def put_certificate_tags(
  value: IResolvable | typing.List[CertificatemanagerAcmeEndpointCertificateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CertificatemanagerAcmeEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]

---

##### `reset_certificate_tags` <a name="reset_certificate_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags"></a>

```python
def reset_certificate_tags() -> None
```

##### `reset_contact` <a name="reset_contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact"></a>

```python
def reset_contact() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificatemanagerAcmeEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificatemanagerAcmeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority">certificate_authority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags">certificate_tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput">authorization_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput">certificate_authority_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput">certificate_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput">contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior">authorization_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact">contact</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn"></a>

```python
acme_endpoint_arn: str
```

- *Type:* str

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority"></a>

```python
certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a>

---

##### `certificate_tags`<sup>Required</sup> <a name="certificate_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags"></a>

```python
certificate_tags: CertificatemanagerAcmeEndpointCertificateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a>

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags"></a>

```python
tags: CertificatemanagerAcmeEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a>

---

##### `authorization_behavior_input`<sup>Optional</sup> <a name="authorization_behavior_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput"></a>

```python
authorization_behavior_input: str
```

- *Type:* str

---

##### `certificate_authority_input`<sup>Optional</sup> <a name="certificate_authority_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput"></a>

```python
certificate_authority_input: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---

##### `certificate_tags_input`<sup>Optional</sup> <a name="certificate_tags_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput"></a>

```python
certificate_tags_input: IResolvable | typing.List[CertificatemanagerAcmeEndpointCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]

---

##### `contact_input`<sup>Optional</sup> <a name="contact_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput"></a>

```python
contact_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CertificatemanagerAcmeEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]

---

##### `authorization_behavior`<sup>Required</sup> <a name="authorization_behavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior"></a>

```python
authorization_behavior: str
```

- *Type:* str

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact"></a>

```python
contact: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeEndpointCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority(
  public_certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority">public_certificate_authority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | Configuration for the public certificate authority. |

---

##### `public_certificate_authority`<sup>Required</sup> <a name="public_certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority"></a>

```python
public_certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

Configuration for the public certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#public_certificate_authority CertificatemanagerAcmeEndpoint#public_certificate_authority}

---

### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority(
  allowed_key_algorithms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms">allowed_key_algorithms</a></code> | <code>typing.List[str]</code> | The allowed key algorithms for certificates issued via this endpoint. |

---

##### `allowed_key_algorithms`<sup>Optional</sup> <a name="allowed_key_algorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms"></a>

```python
allowed_key_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

The allowed key algorithms for certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#allowed_key_algorithms CertificatemanagerAcmeEndpoint#allowed_key_algorithms}

---

### CertificatemanagerAcmeEndpointCertificateTags <a name="CertificatemanagerAcmeEndpointCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

### CertificatemanagerAcmeEndpointConfig <a name="CertificatemanagerAcmeEndpointConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorization_behavior: str,
  certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthority,
  certificate_tags: IResolvable | typing.List[CertificatemanagerAcmeEndpointCertificateTags] = None,
  contact: str = None,
  tags: IResolvable | typing.List[CertificatemanagerAcmeEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior">authorization_behavior</a></code> | <code>str</code> | The authorization behavior for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority">certificate_authority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | The certificate authority configuration for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags">certificate_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]</code> | Tags applied to certificates issued via this endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact">contact</a></code> | <code>str</code> | Whether contact information is required for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]</code> | Tags associated with the ACME endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization_behavior`<sup>Required</sup> <a name="authorization_behavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior"></a>

```python
authorization_behavior: str
```

- *Type:* str

The authorization behavior for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#authorization_behavior CertificatemanagerAcmeEndpoint#authorization_behavior}

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority"></a>

```python
certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

The certificate authority configuration for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#certificate_authority CertificatemanagerAcmeEndpoint#certificate_authority}

---

##### `certificate_tags`<sup>Optional</sup> <a name="certificate_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags"></a>

```python
certificate_tags: IResolvable | typing.List[CertificatemanagerAcmeEndpointCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]

Tags applied to certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#certificate_tags CertificatemanagerAcmeEndpoint#certificate_tags}

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact"></a>

```python
contact: str
```

- *Type:* str

Whether contact information is required for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#contact CertificatemanagerAcmeEndpoint#contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CertificatemanagerAcmeEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]

Tags associated with the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#tags CertificatemanagerAcmeEndpoint#tags}

---

### CertificatemanagerAcmeEndpointTags <a name="CertificatemanagerAcmeEndpointTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority">put_public_certificate_authority</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_certificate_authority` <a name="put_public_certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority"></a>

```python
def put_public_certificate_authority(
  allowed_key_algorithms: typing.List[str] = None
) -> None
```

###### `allowed_key_algorithms`<sup>Optional</sup> <a name="allowed_key_algorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority.parameter.allowedKeyAlgorithms"></a>

- *Type:* typing.List[str]

The allowed key algorithms for certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#allowed_key_algorithms CertificatemanagerAcmeEndpoint#allowed_key_algorithms}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority">public_certificate_authority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput">public_certificate_authority_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_certificate_authority`<sup>Required</sup> <a name="public_certificate_authority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority"></a>

```python
public_certificate_authority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a>

---

##### `public_certificate_authority_input`<sup>Optional</sup> <a name="public_certificate_authority_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput"></a>

```python
public_certificate_authority_input: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---


### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms">reset_allowed_key_algorithms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_key_algorithms` <a name="reset_allowed_key_algorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms"></a>

```python
def reset_allowed_key_algorithms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput">allowed_key_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms">allowed_key_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_key_algorithms_input`<sup>Optional</sup> <a name="allowed_key_algorithms_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput"></a>

```python
allowed_key_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_key_algorithms`<sup>Required</sup> <a name="allowed_key_algorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms"></a>

```python
allowed_key_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


### CertificatemanagerAcmeEndpointCertificateTagsList <a name="CertificatemanagerAcmeEndpointCertificateTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatemanagerAcmeEndpointCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CertificatemanagerAcmeEndpointCertificateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>]

---


### CertificatemanagerAcmeEndpointCertificateTagsOutputReference <a name="CertificatemanagerAcmeEndpointCertificateTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeEndpointCertificateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>

---


### CertificatemanagerAcmeEndpointTagsList <a name="CertificatemanagerAcmeEndpointTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatemanagerAcmeEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CertificatemanagerAcmeEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>]

---


### CertificatemanagerAcmeEndpointTagsOutputReference <a name="CertificatemanagerAcmeEndpointTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_endpoint

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>

---



