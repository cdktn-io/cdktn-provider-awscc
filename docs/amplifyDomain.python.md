# `amplifyDomain` Submodule <a name="`amplifyDomain` Submodule" id="@cdktn/provider-awscc.amplifyDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyDomain <a name="AmplifyDomain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain awscc_amplify_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  domain_name: str,
  sub_domain_settings: IResolvable | typing.List[AmplifyDomainSubDomainSettings],
  auto_sub_domain_creation_patterns: typing.List[str] = None,
  auto_sub_domain_iam_role: str = None,
  certificate_settings: AmplifyDomainCertificateSettings = None,
  enable_auto_sub_domain: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#app_id AmplifyDomain#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#domain_name AmplifyDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.subDomainSettings">sub_domain_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#sub_domain_settings AmplifyDomain#sub_domain_settings}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.autoSubDomainCreationPatterns">auto_sub_domain_creation_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.autoSubDomainIamRole">auto_sub_domain_iam_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.certificateSettings">certificate_settings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_settings AmplifyDomain#certificate_settings}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.enableAutoSubDomain">enable_auto_sub_domain</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#app_id AmplifyDomain#app_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#domain_name AmplifyDomain#domain_name}.

---

##### `sub_domain_settings`<sup>Required</sup> <a name="sub_domain_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.subDomainSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#sub_domain_settings AmplifyDomain#sub_domain_settings}.

---

##### `auto_sub_domain_creation_patterns`<sup>Optional</sup> <a name="auto_sub_domain_creation_patterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.autoSubDomainCreationPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}.

---

##### `auto_sub_domain_iam_role`<sup>Optional</sup> <a name="auto_sub_domain_iam_role" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.autoSubDomainIamRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}.

---

##### `certificate_settings`<sup>Optional</sup> <a name="certificate_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.certificateSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_settings AmplifyDomain#certificate_settings}.

---

##### `enable_auto_sub_domain`<sup>Optional</sup> <a name="enable_auto_sub_domain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.enableAutoSubDomain"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings">put_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putSubDomainSettings">put_sub_domain_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainCreationPatterns">reset_auto_sub_domain_creation_patterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainIamRole">reset_auto_sub_domain_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetCertificateSettings">reset_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetEnableAutoSubDomain">reset_enable_auto_sub_domain</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_settings` <a name="put_certificate_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings"></a>

```python
def put_certificate_settings(
  certificate_type: str = None,
  custom_certificate_arn: str = None
) -> None
```

###### `certificate_type`<sup>Optional</sup> <a name="certificate_type" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings.parameter.certificateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_type AmplifyDomain#certificate_type}.

---

###### `custom_certificate_arn`<sup>Optional</sup> <a name="custom_certificate_arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings.parameter.customCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#custom_certificate_arn AmplifyDomain#custom_certificate_arn}.

---

##### `put_sub_domain_settings` <a name="put_sub_domain_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putSubDomainSettings"></a>

```python
def put_sub_domain_settings(
  value: IResolvable | typing.List[AmplifyDomainSubDomainSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putSubDomainSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]

---

##### `reset_auto_sub_domain_creation_patterns` <a name="reset_auto_sub_domain_creation_patterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainCreationPatterns"></a>

```python
def reset_auto_sub_domain_creation_patterns() -> None
```

##### `reset_auto_sub_domain_iam_role` <a name="reset_auto_sub_domain_iam_role" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainIamRole"></a>

```python
def reset_auto_sub_domain_iam_role() -> None
```

##### `reset_certificate_settings` <a name="reset_certificate_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetCertificateSettings"></a>

```python
def reset_certificate_settings() -> None
```

##### `reset_enable_auto_sub_domain` <a name="reset_enable_auto_sub_domain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetEnableAutoSubDomain"></a>

```python
def reset_enable_auto_sub_domain() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AmplifyDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformResource"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AmplifyDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AmplifyDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AmplifyDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference">AmplifyDomainCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateRecord">certificate_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettings">certificate_settings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference">AmplifyDomainCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainStatus">domain_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettings">sub_domain_settings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList">AmplifyDomainSubDomainSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.updateStatus">update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatternsInput">auto_sub_domain_creation_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRoleInput">auto_sub_domain_iam_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettingsInput">certificate_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomainInput">enable_auto_sub_domain_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettingsInput">sub_domain_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatterns">auto_sub_domain_creation_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRole">auto_sub_domain_iam_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomain">enable_auto_sub_domain</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificate"></a>

```python
certificate: AmplifyDomainCertificateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference">AmplifyDomainCertificateOutputReference</a>

---

##### `certificate_record`<sup>Required</sup> <a name="certificate_record" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateRecord"></a>

```python
certificate_record: str
```

- *Type:* str

---

##### `certificate_settings`<sup>Required</sup> <a name="certificate_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettings"></a>

```python
certificate_settings: AmplifyDomainCertificateSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference">AmplifyDomainCertificateSettingsOutputReference</a>

---

##### `domain_status`<sup>Required</sup> <a name="domain_status" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainStatus"></a>

```python
domain_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `sub_domain_settings`<sup>Required</sup> <a name="sub_domain_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettings"></a>

```python
sub_domain_settings: AmplifyDomainSubDomainSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList">AmplifyDomainSubDomainSettingsList</a>

---

##### `update_status`<sup>Required</sup> <a name="update_status" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `auto_sub_domain_creation_patterns_input`<sup>Optional</sup> <a name="auto_sub_domain_creation_patterns_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatternsInput"></a>

```python
auto_sub_domain_creation_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_sub_domain_iam_role_input`<sup>Optional</sup> <a name="auto_sub_domain_iam_role_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRoleInput"></a>

```python
auto_sub_domain_iam_role_input: str
```

- *Type:* str

---

##### `certificate_settings_input`<sup>Optional</sup> <a name="certificate_settings_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettingsInput"></a>

```python
certificate_settings_input: IResolvable | AmplifyDomainCertificateSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `enable_auto_sub_domain_input`<sup>Optional</sup> <a name="enable_auto_sub_domain_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomainInput"></a>

```python
enable_auto_sub_domain_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sub_domain_settings_input`<sup>Optional</sup> <a name="sub_domain_settings_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettingsInput"></a>

```python
sub_domain_settings_input: IResolvable | typing.List[AmplifyDomainSubDomainSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `auto_sub_domain_creation_patterns`<sup>Required</sup> <a name="auto_sub_domain_creation_patterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatterns"></a>

```python
auto_sub_domain_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_sub_domain_iam_role`<sup>Required</sup> <a name="auto_sub_domain_iam_role" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRole"></a>

```python
auto_sub_domain_iam_role: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `enable_auto_sub_domain`<sup>Required</sup> <a name="enable_auto_sub_domain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomain"></a>

```python
enable_auto_sub_domain: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyDomainCertificate <a name="AmplifyDomainCertificate" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainCertificate()
```


### AmplifyDomainCertificateSettings <a name="AmplifyDomainCertificateSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainCertificateSettings(
  certificate_type: str = None,
  custom_certificate_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.certificateType">certificate_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_type AmplifyDomain#certificate_type}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.customCertificateArn">custom_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#custom_certificate_arn AmplifyDomain#custom_certificate_arn}. |

---

##### `certificate_type`<sup>Optional</sup> <a name="certificate_type" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_type AmplifyDomain#certificate_type}.

---

##### `custom_certificate_arn`<sup>Optional</sup> <a name="custom_certificate_arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.customCertificateArn"></a>

```python
custom_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#custom_certificate_arn AmplifyDomain#custom_certificate_arn}.

---

### AmplifyDomainConfig <a name="AmplifyDomainConfig" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  domain_name: str,
  sub_domain_settings: IResolvable | typing.List[AmplifyDomainSubDomainSettings],
  auto_sub_domain_creation_patterns: typing.List[str] = None,
  auto_sub_domain_iam_role: str = None,
  certificate_settings: AmplifyDomainCertificateSettings = None,
  enable_auto_sub_domain: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#app_id AmplifyDomain#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#domain_name AmplifyDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.subDomainSettings">sub_domain_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#sub_domain_settings AmplifyDomain#sub_domain_settings}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainCreationPatterns">auto_sub_domain_creation_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainIamRole">auto_sub_domain_iam_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.certificateSettings">certificate_settings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_settings AmplifyDomain#certificate_settings}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.enableAutoSubDomain">enable_auto_sub_domain</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#app_id AmplifyDomain#app_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#domain_name AmplifyDomain#domain_name}.

---

##### `sub_domain_settings`<sup>Required</sup> <a name="sub_domain_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.subDomainSettings"></a>

```python
sub_domain_settings: IResolvable | typing.List[AmplifyDomainSubDomainSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#sub_domain_settings AmplifyDomain#sub_domain_settings}.

---

##### `auto_sub_domain_creation_patterns`<sup>Optional</sup> <a name="auto_sub_domain_creation_patterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainCreationPatterns"></a>

```python
auto_sub_domain_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}.

---

##### `auto_sub_domain_iam_role`<sup>Optional</sup> <a name="auto_sub_domain_iam_role" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainIamRole"></a>

```python
auto_sub_domain_iam_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}.

---

##### `certificate_settings`<sup>Optional</sup> <a name="certificate_settings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.certificateSettings"></a>

```python
certificate_settings: AmplifyDomainCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_settings AmplifyDomain#certificate_settings}.

---

##### `enable_auto_sub_domain`<sup>Optional</sup> <a name="enable_auto_sub_domain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.enableAutoSubDomain"></a>

```python
enable_auto_sub_domain: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}.

---

### AmplifyDomainSubDomainSettings <a name="AmplifyDomainSubDomainSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainSubDomainSettings(
  branch_name: str,
  prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#branch_name AmplifyDomain#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#prefix AmplifyDomain#prefix}. |

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#branch_name AmplifyDomain#branch_name}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#prefix AmplifyDomain#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyDomainCertificateOutputReference <a name="AmplifyDomainCertificateOutputReference" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateType">certificate_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateVerificationDnsRecord">certificate_verification_dns_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate">AmplifyDomainCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `certificate_type`<sup>Required</sup> <a name="certificate_type" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

---

##### `certificate_verification_dns_record`<sup>Required</sup> <a name="certificate_verification_dns_record" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateVerificationDnsRecord"></a>

```python
certificate_verification_dns_record: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.internalValue"></a>

```python
internal_value: AmplifyDomainCertificate
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate">AmplifyDomainCertificate</a>

---


### AmplifyDomainCertificateSettingsOutputReference <a name="AmplifyDomainCertificateSettingsOutputReference" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainCertificateSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCertificateType">reset_certificate_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCustomCertificateArn">reset_custom_certificate_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_type` <a name="reset_certificate_type" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCertificateType"></a>

```python
def reset_certificate_type() -> None
```

##### `reset_custom_certificate_arn` <a name="reset_custom_certificate_arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCustomCertificateArn"></a>

```python
def reset_custom_certificate_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateTypeInput">certificate_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArnInput">custom_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateType">certificate_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArn">custom_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_type_input`<sup>Optional</sup> <a name="certificate_type_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateTypeInput"></a>

```python
certificate_type_input: str
```

- *Type:* str

---

##### `custom_certificate_arn_input`<sup>Optional</sup> <a name="custom_certificate_arn_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArnInput"></a>

```python
custom_certificate_arn_input: str
```

- *Type:* str

---

##### `certificate_type`<sup>Required</sup> <a name="certificate_type" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

---

##### `custom_certificate_arn`<sup>Required</sup> <a name="custom_certificate_arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArn"></a>

```python
custom_certificate_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyDomainCertificateSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

---


### AmplifyDomainSubDomainSettingsList <a name="AmplifyDomainSubDomainSettingsList" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainSubDomainSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyDomainSubDomainSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyDomainSubDomainSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>]

---


### AmplifyDomainSubDomainSettingsOutputReference <a name="AmplifyDomainSubDomainSettingsOutputReference" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_domain

amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyDomainSubDomainSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>

---



