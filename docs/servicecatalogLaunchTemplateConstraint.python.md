# `servicecatalogLaunchTemplateConstraint` Submodule <a name="`servicecatalogLaunchTemplateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogLaunchTemplateConstraint <a name="ServicecatalogLaunchTemplateConstraint" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint awscc_servicecatalog_launch_template_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_launch_template_constraint

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  portfolio_id: str,
  product_id: str,
  rules: str,
  accept_language: str = None,
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.rules">rules</a></code> | <code>str</code> | A json encoded string of the template constraint rules. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the constraint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.portfolioId"></a>

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#portfolio_id ServicecatalogLaunchTemplateConstraint#portfolio_id}

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.productId"></a>

- *Type:* str

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#product_id ServicecatalogLaunchTemplateConstraint#product_id}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.rules"></a>

- *Type:* str

A json encoded string of the template constraint rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#rules ServicecatalogLaunchTemplateConstraint#rules}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#accept_language ServicecatalogLaunchTemplateConstraint#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.description"></a>

- *Type:* str

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#description ServicecatalogLaunchTemplateConstraint#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_launch_template_constraint

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_launch_template_constraint

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_launch_template_constraint

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_launch_template_constraint

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogLaunchTemplateConstraint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogLaunchTemplateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogLaunchTemplateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId">launch_template_constraint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput">portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput">rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules">rules</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `launch_template_constraint_id`<sup>Required</sup> <a name="launch_template_constraint_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId"></a>

```python
launch_template_constraint_id: str
```

- *Type:* str

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `portfolio_id_input`<sup>Optional</sup> <a name="portfolio_id_input" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput"></a>

```python
portfolio_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput"></a>

```python
rules_input: str
```

- *Type:* str

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules"></a>

```python
rules: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogLaunchTemplateConstraintConfig <a name="ServicecatalogLaunchTemplateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_launch_template_constraint

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  portfolio_id: str,
  product_id: str,
  rules: str,
  accept_language: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId">product_id</a></code> | <code>str</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules">rules</a></code> | <code>str</code> | A json encoded string of the template constraint rules. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description">description</a></code> | <code>str</code> | The description of the constraint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#portfolio_id ServicecatalogLaunchTemplateConstraint#portfolio_id}

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#product_id ServicecatalogLaunchTemplateConstraint#product_id}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules"></a>

```python
rules: str
```

- *Type:* str

A json encoded string of the template constraint rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#rules ServicecatalogLaunchTemplateConstraint#rules}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#accept_language ServicecatalogLaunchTemplateConstraint#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_template_constraint#description ServicecatalogLaunchTemplateConstraint#description}

---



