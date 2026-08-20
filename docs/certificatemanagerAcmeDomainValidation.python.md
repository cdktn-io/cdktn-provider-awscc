# `certificatemanagerAcmeDomainValidation` Submodule <a name="`certificatemanagerAcmeDomainValidation` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeDomainValidation <a name="CertificatemanagerAcmeDomainValidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acme_endpoint_arn: str,
  domain_name: str,
  prevalidation_options: CertificatemanagerAcmeDomainValidationPrevalidationOptions,
  tags: IResolvable | typing.List[CertificatemanagerAcmeDomainValidationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | The ARN of the ACME endpoint this domain validation is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The domain name to validate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.prevalidationOptions">prevalidation_options</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | Prevalidation method configuration. Currently only DNS-based prevalidation is supported. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]</code> | Tags associated with the domain validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.acmeEndpointArn"></a>

- *Type:* str

The ARN of the ACME endpoint this domain validation is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#acme_endpoint_arn CertificatemanagerAcmeDomainValidation#acme_endpoint_arn}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.domainName"></a>

- *Type:* str

The domain name to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#domain_name CertificatemanagerAcmeDomainValidation#domain_name}

---

##### `prevalidation_options`<sup>Required</sup> <a name="prevalidation_options" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.prevalidationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

Prevalidation method configuration. Currently only DNS-based prevalidation is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#prevalidation_options CertificatemanagerAcmeDomainValidation#prevalidation_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]

Tags associated with the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#tags CertificatemanagerAcmeDomainValidation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions">put_prevalidation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_prevalidation_options` <a name="put_prevalidation_options" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions"></a>

```python
def put_prevalidation_options(
  dns_prevalidation: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
) -> None
```

###### `dns_prevalidation`<sup>Required</sup> <a name="dns_prevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions.parameter.dnsPrevalidation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

DNS-based prevalidation options for the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#dns_prevalidation CertificatemanagerAcmeDomainValidation#dns_prevalidation}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CertificatemanagerAcmeDomainValidationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificatemanagerAcmeDomainValidation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificatemanagerAcmeDomainValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeDomainValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptions">prevalidation_options</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList">CertificatemanagerAcmeDomainValidationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArnInput">acme_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptionsInput">prevalidation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prevalidation_options`<sup>Required</sup> <a name="prevalidation_options" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptions"></a>

```python
prevalidation_options: CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tags"></a>

```python
tags: CertificatemanagerAcmeDomainValidationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList">CertificatemanagerAcmeDomainValidationTagsList</a>

---

##### `acme_endpoint_arn_input`<sup>Optional</sup> <a name="acme_endpoint_arn_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArnInput"></a>

```python
acme_endpoint_arn_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `prevalidation_options_input`<sup>Optional</sup> <a name="prevalidation_options_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptionsInput"></a>

```python
prevalidation_options_input: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CertificatemanagerAcmeDomainValidationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArn"></a>

```python
acme_endpoint_arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeDomainValidationConfig <a name="CertificatemanagerAcmeDomainValidationConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acme_endpoint_arn: str,
  domain_name: str,
  prevalidation_options: CertificatemanagerAcmeDomainValidationPrevalidationOptions,
  tags: IResolvable | typing.List[CertificatemanagerAcmeDomainValidationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | The ARN of the ACME endpoint this domain validation is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.domainName">domain_name</a></code> | <code>str</code> | The domain name to validate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.prevalidationOptions">prevalidation_options</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | Prevalidation method configuration. Currently only DNS-based prevalidation is supported. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]</code> | Tags associated with the domain validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.acmeEndpointArn"></a>

```python
acme_endpoint_arn: str
```

- *Type:* str

The ARN of the ACME endpoint this domain validation is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#acme_endpoint_arn CertificatemanagerAcmeDomainValidation#acme_endpoint_arn}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The domain name to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#domain_name CertificatemanagerAcmeDomainValidation#domain_name}

---

##### `prevalidation_options`<sup>Required</sup> <a name="prevalidation_options" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.prevalidationOptions"></a>

```python
prevalidation_options: CertificatemanagerAcmeDomainValidationPrevalidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

Prevalidation method configuration. Currently only DNS-based prevalidation is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#prevalidation_options CertificatemanagerAcmeDomainValidation#prevalidation_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CertificatemanagerAcmeDomainValidationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]

Tags associated with the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#tags CertificatemanagerAcmeDomainValidation#tags}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptions <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions(
  dns_prevalidation: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.property.dnsPrevalidation">dns_prevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | DNS-based prevalidation options for the domain validation. |

---

##### `dns_prevalidation`<sup>Required</sup> <a name="dns_prevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.property.dnsPrevalidation"></a>

```python
dns_prevalidation: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

DNS-based prevalidation options for the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#dns_prevalidation CertificatemanagerAcmeDomainValidation#dns_prevalidation}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation(
  domain_scope: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope = None,
  hosted_zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.domainScope">domain_scope</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | Controls which certificate types are authorized to be issued for the domain via the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | The Route 53 hosted zone ID for automatic DNS record management. |

---

##### `domain_scope`<sup>Optional</sup> <a name="domain_scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.domainScope"></a>

```python
domain_scope: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#domain_scope CertificatemanagerAcmeDomainValidation#domain_scope}

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

The Route 53 hosted zone ID for automatic DNS record management.

When provided, the service creates the validation DNS record on the customer's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#hosted_zone_id CertificatemanagerAcmeDomainValidation#hosted_zone_id}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope(
  exact_domain: str = None,
  subdomains: str = None,
  wildcards: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.exactDomain">exact_domain</a></code> | <code>str</code> | Whether certificates may be issued for the exact domain. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.subdomains">subdomains</a></code> | <code>str</code> | Whether certificates may be issued for subdomains of the domain. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.wildcards">wildcards</a></code> | <code>str</code> | Whether wildcard certificates may be issued for the domain. |

---

##### `exact_domain`<sup>Optional</sup> <a name="exact_domain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.exactDomain"></a>

```python
exact_domain: str
```

- *Type:* str

Whether certificates may be issued for the exact domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#exact_domain CertificatemanagerAcmeDomainValidation#exact_domain}

---

##### `subdomains`<sup>Optional</sup> <a name="subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.subdomains"></a>

```python
subdomains: str
```

- *Type:* str

Whether certificates may be issued for subdomains of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#subdomains CertificatemanagerAcmeDomainValidation#subdomains}

---

##### `wildcards`<sup>Optional</sup> <a name="wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.wildcards"></a>

```python
wildcards: str
```

- *Type:* str

Whether wildcard certificates may be issued for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#wildcards CertificatemanagerAcmeDomainValidation#wildcards}

---

### CertificatemanagerAcmeDomainValidationTags <a name="CertificatemanagerAcmeDomainValidationTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#key CertificatemanagerAcmeDomainValidation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#value CertificatemanagerAcmeDomainValidation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetExactDomain">reset_exact_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetSubdomains">reset_subdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetWildcards">reset_wildcards</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact_domain` <a name="reset_exact_domain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetExactDomain"></a>

```python
def reset_exact_domain() -> None
```

##### `reset_subdomains` <a name="reset_subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetSubdomains"></a>

```python
def reset_subdomains() -> None
```

##### `reset_wildcards` <a name="reset_wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetWildcards"></a>

```python
def reset_wildcards() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomainInput">exact_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomainsInput">subdomains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcardsInput">wildcards_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain">exact_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains">subdomains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards">wildcards</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_domain_input`<sup>Optional</sup> <a name="exact_domain_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomainInput"></a>

```python
exact_domain_input: str
```

- *Type:* str

---

##### `subdomains_input`<sup>Optional</sup> <a name="subdomains_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomainsInput"></a>

```python
subdomains_input: str
```

- *Type:* str

---

##### `wildcards_input`<sup>Optional</sup> <a name="wildcards_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcardsInput"></a>

```python
wildcards_input: str
```

- *Type:* str

---

##### `exact_domain`<sup>Required</sup> <a name="exact_domain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain"></a>

```python
exact_domain: str
```

- *Type:* str

---

##### `subdomains`<sup>Required</sup> <a name="subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains"></a>

```python
subdomains: str
```

- *Type:* str

---

##### `wildcards`<sup>Required</sup> <a name="wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards"></a>

```python
wildcards: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---


### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope">put_domain_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetDomainScope">reset_domain_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetHostedZoneId">reset_hosted_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_domain_scope` <a name="put_domain_scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope"></a>

```python
def put_domain_scope(
  exact_domain: str = None,
  subdomains: str = None,
  wildcards: str = None
) -> None
```

###### `exact_domain`<sup>Optional</sup> <a name="exact_domain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope.parameter.exactDomain"></a>

- *Type:* str

Whether certificates may be issued for the exact domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#exact_domain CertificatemanagerAcmeDomainValidation#exact_domain}

---

###### `subdomains`<sup>Optional</sup> <a name="subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope.parameter.subdomains"></a>

- *Type:* str

Whether certificates may be issued for subdomains of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#subdomains CertificatemanagerAcmeDomainValidation#subdomains}

---

###### `wildcards`<sup>Optional</sup> <a name="wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope.parameter.wildcards"></a>

- *Type:* str

Whether wildcard certificates may be issued for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#wildcards CertificatemanagerAcmeDomainValidation#wildcards}

---

##### `reset_domain_scope` <a name="reset_domain_scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetDomainScope"></a>

```python
def reset_domain_scope() -> None
```

##### `reset_hosted_zone_id` <a name="reset_hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetHostedZoneId"></a>

```python
def reset_hosted_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope">domain_scope</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScopeInput">domain_scope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_scope`<sup>Required</sup> <a name="domain_scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope"></a>

```python
domain_scope: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a>

---

##### `domain_scope_input`<sup>Optional</sup> <a name="domain_scope_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScopeInput"></a>

```python
domain_scope_input: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


### CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation">put_dns_prevalidation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_prevalidation` <a name="put_dns_prevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation"></a>

```python
def put_dns_prevalidation(
  domain_scope: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope = None,
  hosted_zone_id: str = None
) -> None
```

###### `domain_scope`<sup>Optional</sup> <a name="domain_scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation.parameter.domainScope"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#domain_scope CertificatemanagerAcmeDomainValidation#domain_scope}

---

###### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation.parameter.hostedZoneId"></a>

- *Type:* str

The Route 53 hosted zone ID for automatic DNS record management.

When provided, the service creates the validation DNS record on the customer's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_domain_validation#hosted_zone_id CertificatemanagerAcmeDomainValidation#hosted_zone_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation">dns_prevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidationInput">dns_prevalidation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_prevalidation`<sup>Required</sup> <a name="dns_prevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation"></a>

```python
dns_prevalidation: CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a>

---

##### `dns_prevalidation_input`<sup>Optional</sup> <a name="dns_prevalidation_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidationInput"></a>

```python
dns_prevalidation_input: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeDomainValidationPrevalidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---


### CertificatemanagerAcmeDomainValidationTagsList <a name="CertificatemanagerAcmeDomainValidationTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatemanagerAcmeDomainValidationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CertificatemanagerAcmeDomainValidationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>]

---


### CertificatemanagerAcmeDomainValidationTagsOutputReference <a name="CertificatemanagerAcmeDomainValidationTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_domain_validation

certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeDomainValidationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags">CertificatemanagerAcmeDomainValidationTags</a>

---



