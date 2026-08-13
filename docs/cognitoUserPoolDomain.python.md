# `cognitoUserPoolDomain` Submodule <a name="`cognitoUserPoolDomain` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolDomain <a name="CognitoUserPoolDomain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain awscc_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain: str,
  user_pool_id: str,
  custom_domain_config: CognitoUserPoolDomainCustomDomainConfig = None,
  managed_login_version: typing.Union[int, float] = None,
  routing: CognitoUserPoolDomainRouting = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.customDomainConfig">custom_domain_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.managedLoginVersion">managed_login_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `custom_domain_config`<sup>Optional</sup> <a name="custom_domain_config" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.customDomainConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}.

---

##### `managed_login_version`<sup>Optional</sup> <a name="managed_login_version" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.managedLoginVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.routing"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig">put_custom_domain_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting">put_routing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCustomDomainConfig">reset_custom_domain_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion">reset_managed_login_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRouting">reset_routing</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_domain_config` <a name="put_custom_domain_config" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig"></a>

```python
def put_custom_domain_config(
  certificate_arn: str = None,
  security_policy: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

###### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig.parameter.securityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}.

---

##### `put_routing` <a name="put_routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting"></a>

```python
def put_routing(
  failover: CognitoUserPoolDomainRoutingFailover = None
) -> None
```

###### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting.parameter.failover"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}.

---

##### `reset_custom_domain_config` <a name="reset_custom_domain_config" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCustomDomainConfig"></a>

```python
def reset_custom_domain_config() -> None
```

##### `reset_managed_login_version` <a name="reset_managed_login_version" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion"></a>

```python
def reset_managed_login_version() -> None
```

##### `reset_routing` <a name="reset_routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRouting"></a>

```python
def reset_routing() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoUserPoolDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution">cloudfront_distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfig">custom_domain_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference">CognitoUserPoolDomainCustomDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference">CognitoUserPoolDomainRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfigInput">custom_domain_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput">managed_login_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routingInput">routing_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion">managed_login_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloudfront_distribution`<sup>Required</sup> <a name="cloudfront_distribution" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```python
cloudfront_distribution: str
```

- *Type:* str

---

##### `custom_domain_config`<sup>Required</sup> <a name="custom_domain_config" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfig"></a>

```python
custom_domain_config: CognitoUserPoolDomainCustomDomainConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference">CognitoUserPoolDomainCustomDomainConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routing"></a>

```python
routing: CognitoUserPoolDomainRoutingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference">CognitoUserPoolDomainRoutingOutputReference</a>

---

##### `custom_domain_config_input`<sup>Optional</sup> <a name="custom_domain_config_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfigInput"></a>

```python
custom_domain_config_input: IResolvable | CognitoUserPoolDomainCustomDomainConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `managed_login_version_input`<sup>Optional</sup> <a name="managed_login_version_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput"></a>

```python
managed_login_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing_input`<sup>Optional</sup> <a name="routing_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routingInput"></a>

```python
routing_input: IResolvable | CognitoUserPoolDomainRouting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `managed_login_version`<sup>Required</sup> <a name="managed_login_version" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion"></a>

```python
managed_login_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolDomainConfig <a name="CognitoUserPoolDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain: str,
  user_pool_id: str,
  custom_domain_config: CognitoUserPoolDomainCustomDomainConfig = None,
  managed_login_version: typing.Union[int, float] = None,
  routing: CognitoUserPoolDomainRouting = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.customDomainConfig">custom_domain_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion">managed_login_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `custom_domain_config`<sup>Optional</sup> <a name="custom_domain_config" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.customDomainConfig"></a>

```python
custom_domain_config: CognitoUserPoolDomainCustomDomainConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}.

---

##### `managed_login_version`<sup>Optional</sup> <a name="managed_login_version" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion"></a>

```python
managed_login_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.routing"></a>

```python
routing: CognitoUserPoolDomainRouting
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}.

---

### CognitoUserPoolDomainCustomDomainConfig <a name="CognitoUserPoolDomainCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig(
  certificate_arn: str = None,
  security_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}.

---

### CognitoUserPoolDomainRouting <a name="CognitoUserPoolDomainRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainRouting(
  failover: CognitoUserPoolDomainRoutingFailover = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}. |

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.property.failover"></a>

```python
failover: CognitoUserPoolDomainRoutingFailover
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}.

---

### CognitoUserPoolDomainRoutingFailover <a name="CognitoUserPoolDomainRoutingFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover(
  primary_route53_health_check_id: str = None,
  secondary_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.primaryRoute53HealthCheckId">primary_route53_health_check_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.secondaryRegion">secondary_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}. |

---

##### `primary_route53_health_check_id`<sup>Optional</sup> <a name="primary_route53_health_check_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.primaryRoute53HealthCheckId"></a>

```python
primary_route53_health_check_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}.

---

##### `secondary_region`<sup>Optional</sup> <a name="secondary_region" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.secondaryRegion"></a>

```python
secondary_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolDomainCustomDomainConfigOutputReference <a name="CognitoUserPoolDomainCustomDomainConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolDomainCustomDomainConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---


### CognitoUserPoolDomainRoutingFailoverOutputReference <a name="CognitoUserPoolDomainRoutingFailoverOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetPrimaryRoute53HealthCheckId">reset_primary_route53_health_check_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetSecondaryRegion">reset_secondary_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary_route53_health_check_id` <a name="reset_primary_route53_health_check_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetPrimaryRoute53HealthCheckId"></a>

```python
def reset_primary_route53_health_check_id() -> None
```

##### `reset_secondary_region` <a name="reset_secondary_region" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetSecondaryRegion"></a>

```python
def reset_secondary_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckIdInput">primary_route53_health_check_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegionInput">secondary_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId">primary_route53_health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion">secondary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_route53_health_check_id_input`<sup>Optional</sup> <a name="primary_route53_health_check_id_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckIdInput"></a>

```python
primary_route53_health_check_id_input: str
```

- *Type:* str

---

##### `secondary_region_input`<sup>Optional</sup> <a name="secondary_region_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegionInput"></a>

```python
secondary_region_input: str
```

- *Type:* str

---

##### `primary_route53_health_check_id`<sup>Required</sup> <a name="primary_route53_health_check_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId"></a>

```python
primary_route53_health_check_id: str
```

- *Type:* str

---

##### `secondary_region`<sup>Required</sup> <a name="secondary_region" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion"></a>

```python
secondary_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolDomainRoutingFailover
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---


### CognitoUserPoolDomainRoutingOutputReference <a name="CognitoUserPoolDomainRoutingOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_domain

cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover">put_failover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resetFailover">reset_failover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_failover` <a name="put_failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover"></a>

```python
def put_failover(
  primary_route53_health_check_id: str = None,
  secondary_region: str = None
) -> None
```

###### `primary_route53_health_check_id`<sup>Optional</sup> <a name="primary_route53_health_check_id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover.parameter.primaryRoute53HealthCheckId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}.

---

###### `secondary_region`<sup>Optional</sup> <a name="secondary_region" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover.parameter.secondaryRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}.

---

##### `reset_failover` <a name="reset_failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resetFailover"></a>

```python
def reset_failover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference">CognitoUserPoolDomainRoutingFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failoverInput">failover_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failover"></a>

```python
failover: CognitoUserPoolDomainRoutingFailoverOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference">CognitoUserPoolDomainRoutingFailoverOutputReference</a>

---

##### `failover_input`<sup>Optional</sup> <a name="failover_input" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failoverInput"></a>

```python
failover_input: IResolvable | CognitoUserPoolDomainRoutingFailover
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolDomainRouting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---



