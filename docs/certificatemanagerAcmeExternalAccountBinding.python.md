# `certificatemanagerAcmeExternalAccountBinding` Submodule <a name="`certificatemanagerAcmeExternalAccountBinding` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeExternalAccountBinding <a name="CertificatemanagerAcmeExternalAccountBinding" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding awscc_certificatemanager_acme_external_account_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding(
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
  role_arn: str,
  expiration: CertificatemanagerAcmeExternalAccountBindingExpiration = None,
  tags: IResolvable | typing.List[CertificatemanagerAcmeExternalAccountBindingTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]</code> | Tags associated with the external account binding. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.acmeEndpointArn"></a>

- *Type:* str

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.roleArn"></a>

- *Type:* str

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.expiration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_expiration` <a name="put_expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration"></a>

```python
def put_expiration(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration.parameter.type"></a>

- *Type:* str

The time unit for the expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#type CertificatemanagerAcmeExternalAccountBinding#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration.parameter.value"></a>

- *Type:* typing.Union[int, float]

The expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CertificatemanagerAcmeExternalAccountBindingTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]

---

##### `reset_expiration` <a name="reset_expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificatemanagerAcmeExternalAccountBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificatemanagerAcmeExternalAccountBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeExternalAccountBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn">acme_external_account_binding_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput">acme_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput">expiration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_external_account_binding_arn`<sup>Required</sup> <a name="acme_external_account_binding_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn"></a>

```python
acme_external_account_binding_arn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration"></a>

```python
expiration: CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags"></a>

```python
tags: CertificatemanagerAcmeExternalAccountBindingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a>

---

##### `acme_endpoint_arn_input`<sup>Optional</sup> <a name="acme_endpoint_arn_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput"></a>

```python
acme_endpoint_arn_input: str
```

- *Type:* str

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput"></a>

```python
expiration_input: IResolvable | CertificatemanagerAcmeExternalAccountBindingExpiration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CertificatemanagerAcmeExternalAccountBindingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn"></a>

```python
acme_endpoint_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeExternalAccountBindingConfig <a name="CertificatemanagerAcmeExternalAccountBindingConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acme_endpoint_arn: str,
  role_arn: str,
  expiration: CertificatemanagerAcmeExternalAccountBindingExpiration = None,
  tags: IResolvable | typing.List[CertificatemanagerAcmeExternalAccountBindingTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]</code> | Tags associated with the external account binding. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn"></a>

```python
acme_endpoint_arn: str
```

- *Type:* str

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration"></a>

```python
expiration: CertificatemanagerAcmeExternalAccountBindingExpiration
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CertificatemanagerAcmeExternalAccountBindingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

### CertificatemanagerAcmeExternalAccountBindingExpiration <a name="CertificatemanagerAcmeExternalAccountBindingExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type">type</a></code> | <code>str</code> | The time unit for the expiration value. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The expiration value. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type"></a>

```python
type: str
```

- *Type:* str

The time unit for the expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#type CertificatemanagerAcmeExternalAccountBinding#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

### CertificatemanagerAcmeExternalAccountBindingTags <a name="CertificatemanagerAcmeExternalAccountBindingTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#key CertificatemanagerAcmeExternalAccountBinding#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeExternalAccountBindingExpiration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---


### CertificatemanagerAcmeExternalAccountBindingTagsList <a name="CertificatemanagerAcmeExternalAccountBindingTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificatemanagerAcmeExternalAccountBindingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CertificatemanagerAcmeExternalAccountBindingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>]

---


### CertificatemanagerAcmeExternalAccountBindingTagsOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import certificatemanager_acme_external_account_binding

certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificatemanagerAcmeExternalAccountBindingTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>

---



