# `opensearchserverlessSecurityConfig` Submodule <a name="`opensearchserverlessSecurityConfig` Submodule" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessSecurityConfig <a name="OpensearchserverlessSecurityConfig" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config awscc_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  iam_federation_options: OpensearchserverlessSecurityConfigIamFederationOptions = None,
  iam_identity_center_options: OpensearchserverlessSecurityConfigIamIdentityCenterOptions = None,
  name: str = None,
  saml_options: OpensearchserverlessSecurityConfigSamlOptions = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Security config description. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | Describe IAM federation options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The friendly name of the security config. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | Describes saml options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type">type</a></code> | <code>str</code> | Config type for security config. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description"></a>

- *Type:* str

Security config description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}

---

##### `iam_federation_options`<sup>Optional</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamFederationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

Describe IAM federation options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_federation_options OpensearchserverlessSecurityConfig#iam_federation_options}

---

##### `iam_identity_center_options`<sup>Optional</sup> <a name="iam_identity_center_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamIdentityCenterOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options OpensearchserverlessSecurityConfig#iam_identity_center_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name"></a>

- *Type:* str

The friendly name of the security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

Describes saml options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type"></a>

- *Type:* str

Config type for security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions">put_iam_federation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions">put_iam_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions">put_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamFederationOptions">reset_iam_federation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamIdentityCenterOptions">reset_iam_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions">reset_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_iam_federation_options` <a name="put_iam_federation_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions"></a>

```python
def put_iam_federation_options(
  group_attribute: str = None,
  user_attribute: str = None
) -> None
```

###### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions.parameter.groupAttribute"></a>

- *Type:* str

Group attribute for this IAM federation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

###### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions.parameter.userAttribute"></a>

- *Type:* str

User attribute for this IAM federation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

##### `put_iam_identity_center_options` <a name="put_iam_identity_center_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions"></a>

```python
def put_iam_identity_center_options(
  group_attribute: str = None,
  instance_arn: str = None,
  user_attribute: str = None
) -> None
```

###### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions.parameter.groupAttribute"></a>

- *Type:* str

Group attribute for this IAM Identity Center integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

###### `instance_arn`<sup>Optional</sup> <a name="instance_arn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions.parameter.instanceArn"></a>

- *Type:* str

The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#instance_arn OpensearchserverlessSecurityConfig#instance_arn}

---

###### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions.parameter.userAttribute"></a>

- *Type:* str

User attribute for this IAM Identity Center integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

##### `put_saml_options` <a name="put_saml_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions"></a>

```python
def put_saml_options(
  group_attribute: str = None,
  metadata: str = None,
  open_search_serverless_entity_id: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_attribute: str = None
) -> None
```

###### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.groupAttribute"></a>

- *Type:* str

Group attribute for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.metadata"></a>

- *Type:* str

The XML saml provider metadata document that you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}

---

###### `open_search_serverless_entity_id`<sup>Optional</sup> <a name="open_search_serverless_entity_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.openSearchServerlessEntityId"></a>

- *Type:* str

Custom entity id attribute to override default entity id for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#open_search_serverless_entity_id OpensearchserverlessSecurityConfig#open_search_serverless_entity_id}

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

Defines the session timeout in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}

---

###### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.userAttribute"></a>

- *Type:* str

Custom attribute for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_iam_federation_options` <a name="reset_iam_federation_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamFederationOptions"></a>

```python
def reset_iam_federation_options() -> None
```

##### `reset_iam_identity_center_options` <a name="reset_iam_identity_center_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamIdentityCenterOptions"></a>

```python
def reset_iam_identity_center_options() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_saml_options` <a name="reset_saml_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions"></a>

```python
def reset_saml_options() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchserverlessSecurityConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.securityConfigId">security_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptionsInput">iam_federation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptionsInput">iam_identity_center_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput">saml_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iam_federation_options`<sup>Required</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptions"></a>

```python
iam_federation_options: OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a>

---

##### `iam_identity_center_options`<sup>Required</sup> <a name="iam_identity_center_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions"></a>

```python
saml_options: OpensearchserverlessSecurityConfigSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `security_config_id`<sup>Required</sup> <a name="security_config_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.securityConfigId"></a>

```python
security_config_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `iam_federation_options_input`<sup>Optional</sup> <a name="iam_federation_options_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptionsInput"></a>

```python
iam_federation_options_input: IResolvable | OpensearchserverlessSecurityConfigIamFederationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

---

##### `iam_identity_center_options_input`<sup>Optional</sup> <a name="iam_identity_center_options_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptionsInput"></a>

```python
iam_identity_center_options_input: IResolvable | OpensearchserverlessSecurityConfigIamIdentityCenterOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `saml_options_input`<sup>Optional</sup> <a name="saml_options_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput"></a>

```python
saml_options_input: IResolvable | OpensearchserverlessSecurityConfigSamlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessSecurityConfigConfig <a name="OpensearchserverlessSecurityConfigConfig" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  iam_federation_options: OpensearchserverlessSecurityConfigIamFederationOptions = None,
  iam_identity_center_options: OpensearchserverlessSecurityConfigIamIdentityCenterOptions = None,
  name: str = None,
  saml_options: OpensearchserverlessSecurityConfigSamlOptions = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description">description</a></code> | <code>str</code> | Security config description. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | Describe IAM federation options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name">name</a></code> | <code>str</code> | The friendly name of the security config. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | Describes saml options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type">type</a></code> | <code>str</code> | Config type for security config. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Security config description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}

---

##### `iam_federation_options`<sup>Optional</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamFederationOptions"></a>

```python
iam_federation_options: OpensearchserverlessSecurityConfigIamFederationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

Describe IAM federation options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_federation_options OpensearchserverlessSecurityConfig#iam_federation_options}

---

##### `iam_identity_center_options`<sup>Optional</sup> <a name="iam_identity_center_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: OpensearchserverlessSecurityConfigIamIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options OpensearchserverlessSecurityConfig#iam_identity_center_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The friendly name of the security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions"></a>

```python
saml_options: OpensearchserverlessSecurityConfigSamlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

Describes saml options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Config type for security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}

---

### OpensearchserverlessSecurityConfigIamFederationOptions <a name="OpensearchserverlessSecurityConfigIamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions(
  group_attribute: str = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Group attribute for this IAM federation integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | User attribute for this IAM federation integration. |

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Group attribute for this IAM federation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

User attribute for this IAM federation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

### OpensearchserverlessSecurityConfigIamIdentityCenterOptions <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions(
  group_attribute: str = None,
  instance_arn: str = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Group attribute for this IAM Identity Center integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.instanceArn">instance_arn</a></code> | <code>str</code> | The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | User attribute for this IAM Identity Center integration. |

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Group attribute for this IAM Identity Center integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `instance_arn`<sup>Optional</sup> <a name="instance_arn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#instance_arn OpensearchserverlessSecurityConfig#instance_arn}

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

User attribute for this IAM Identity Center integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

### OpensearchserverlessSecurityConfigSamlOptions <a name="OpensearchserverlessSecurityConfigSamlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions(
  group_attribute: str = None,
  metadata: str = None,
  open_search_serverless_entity_id: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Group attribute for this saml integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata">metadata</a></code> | <code>str</code> | The XML saml provider metadata document that you want to use. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.openSearchServerlessEntityId">open_search_serverless_entity_id</a></code> | <code>str</code> | Custom entity id attribute to override default entity id for this saml integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Defines the session timeout in minutes. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | Custom attribute for this saml integration. |

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Group attribute for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

The XML saml provider metadata document that you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}

---

##### `open_search_serverless_entity_id`<sup>Optional</sup> <a name="open_search_serverless_entity_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.openSearchServerlessEntityId"></a>

```python
open_search_serverless_entity_id: str
```

- *Type:* str

Custom entity id attribute to override default entity id for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#open_search_serverless_entity_id OpensearchserverlessSecurityConfig#open_search_serverless_entity_id}

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the session timeout in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

Custom attribute for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference <a name="OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessSecurityConfigIamFederationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

---


### OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetInstanceArn">reset_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_instance_arn` <a name="reset_instance_arn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetInstanceArn"></a>

```python
def reset_instance_arn() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription">application_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `application_description`<sup>Required</sup> <a name="application_description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription"></a>

```python
application_description: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessSecurityConfigIamIdentityCenterOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---


### OpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="OpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetOpenSearchServerlessEntityId">reset_open_search_serverless_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_open_search_serverless_entity_id` <a name="reset_open_search_serverless_entity_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetOpenSearchServerlessEntityId"></a>

```python
def reset_open_search_serverless_entity_id() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityIdInput">open_search_serverless_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId">open_search_serverless_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `open_search_serverless_entity_id_input`<sup>Optional</sup> <a name="open_search_serverless_entity_id_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityIdInput"></a>

```python
open_search_serverless_entity_id_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `open_search_serverless_entity_id`<sup>Required</sup> <a name="open_search_serverless_entity_id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId"></a>

```python
open_search_serverless_entity_id: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessSecurityConfigSamlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---



