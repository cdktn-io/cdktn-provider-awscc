# `servicecatalogPortfolioPrincipalAssociation` Submodule <a name="`servicecatalogPortfolioPrincipalAssociation` Submodule" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolioPrincipalAssociation <a name="ServicecatalogPortfolioPrincipalAssociation" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association awscc_servicecatalog_portfolio_principal_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio_principal_association

servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  principal_type: str,
  accept_language: str = None,
  portfolio_id: str = None,
  principal_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalType">principal_type</a></code> | <code>str</code> | The principal type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalArn">principal_arn</a></code> | <code>str</code> | The ARN of the principal (user, role, or group). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalType"></a>

- *Type:* str

The principal type.

The supported value is IAM if you use a fully defined Amazon Resource Name (ARN), or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#principal_type ServicecatalogPortfolioPrincipalAssociation#principal_type}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#accept_language ServicecatalogPortfolioPrincipalAssociation#accept_language}

---

##### `portfolio_id`<sup>Optional</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.portfolioId"></a>

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#portfolio_id ServicecatalogPortfolioPrincipalAssociation#portfolio_id}

---

##### `principal_arn`<sup>Optional</sup> <a name="principal_arn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.Initializer.parameter.principalArn"></a>

- *Type:* str

The ARN of the principal (user, role, or group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#principal_arn ServicecatalogPortfolioPrincipalAssociation#principal_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPortfolioId">reset_portfolio_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPrincipalArn">reset_principal_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_portfolio_id` <a name="reset_portfolio_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPortfolioId"></a>

```python
def reset_portfolio_id() -> None
```

##### `reset_principal_arn` <a name="reset_principal_arn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.resetPrincipalArn"></a>

```python
def reset_principal_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogPortfolioPrincipalAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio_principal_association

servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio_principal_association

servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio_principal_association

servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio_principal_association

servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogPortfolioPrincipalAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogPortfolioPrincipalAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogPortfolioPrincipalAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogPortfolioPrincipalAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioIdInput">portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArnInput">principal_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `portfolio_id_input`<sup>Optional</sup> <a name="portfolio_id_input" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioIdInput"></a>

```python
portfolio_id_input: str
```

- *Type:* str

---

##### `principal_arn_input`<sup>Optional</sup> <a name="principal_arn_input" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArnInput"></a>

```python
principal_arn_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioPrincipalAssociationConfig <a name="ServicecatalogPortfolioPrincipalAssociationConfig" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio_principal_association

servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  principal_type: str,
  accept_language: str = None,
  portfolio_id: str = None,
  principal_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalType">principal_type</a></code> | <code>str</code> | The principal type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalArn">principal_arn</a></code> | <code>str</code> | The ARN of the principal (user, role, or group). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

The principal type.

The supported value is IAM if you use a fully defined Amazon Resource Name (ARN), or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#principal_type ServicecatalogPortfolioPrincipalAssociation#principal_type}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#accept_language ServicecatalogPortfolioPrincipalAssociation#accept_language}

---

##### `portfolio_id`<sup>Optional</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#portfolio_id ServicecatalogPortfolioPrincipalAssociation#portfolio_id}

---

##### `principal_arn`<sup>Optional</sup> <a name="principal_arn" id="@cdktn/provider-awscc.servicecatalogPortfolioPrincipalAssociation.ServicecatalogPortfolioPrincipalAssociationConfig.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

The ARN of the principal (user, role, or group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_portfolio_principal_association#principal_arn ServicecatalogPortfolioPrincipalAssociation#principal_arn}

---



