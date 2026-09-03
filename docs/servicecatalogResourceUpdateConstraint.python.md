# `servicecatalogResourceUpdateConstraint` Submodule <a name="`servicecatalogResourceUpdateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogResourceUpdateConstraint <a name="ServicecatalogResourceUpdateConstraint" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint awscc_servicecatalog_resource_update_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_resource_update_constraint

servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint(
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
  tag_update_on_provisioned_product: str,
  accept_language: str = None,
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.tagUpdateOnProvisionedProduct">tag_update_on_provisioned_product</a></code> | <code>str</code> | ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the constraint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.portfolioId"></a>

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#portfolio_id ServicecatalogResourceUpdateConstraint#portfolio_id}

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.productId"></a>

- *Type:* str

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#product_id ServicecatalogResourceUpdateConstraint#product_id}

---

##### `tag_update_on_provisioned_product`<sup>Required</sup> <a name="tag_update_on_provisioned_product" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.tagUpdateOnProvisionedProduct"></a>

- *Type:* str

ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#tag_update_on_provisioned_product ServicecatalogResourceUpdateConstraint#tag_update_on_provisioned_product}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#accept_language ServicecatalogResourceUpdateConstraint#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.description"></a>

- *Type:* str

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#description ServicecatalogResourceUpdateConstraint#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogResourceUpdateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_resource_update_constraint

servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_resource_update_constraint

servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_resource_update_constraint

servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_resource_update_constraint

servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogResourceUpdateConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogResourceUpdateConstraint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogResourceUpdateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogResourceUpdateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.resourceUpdateConstraintId">resource_update_constraint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioIdInput">portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProductInput">tag_update_on_provisioned_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProduct">tag_update_on_provisioned_product</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_update_constraint_id`<sup>Required</sup> <a name="resource_update_constraint_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.resourceUpdateConstraintId"></a>

```python
resource_update_constraint_id: str
```

- *Type:* str

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `portfolio_id_input`<sup>Optional</sup> <a name="portfolio_id_input" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioIdInput"></a>

```python
portfolio_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `tag_update_on_provisioned_product_input`<sup>Optional</sup> <a name="tag_update_on_provisioned_product_input" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProductInput"></a>

```python
tag_update_on_provisioned_product_input: str
```

- *Type:* str

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `tag_update_on_provisioned_product`<sup>Required</sup> <a name="tag_update_on_provisioned_product" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProduct"></a>

```python
tag_update_on_provisioned_product: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogResourceUpdateConstraintConfig <a name="ServicecatalogResourceUpdateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_resource_update_constraint

servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  portfolio_id: str,
  product_id: str,
  tag_update_on_provisioned_product: str,
  accept_language: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.productId">product_id</a></code> | <code>str</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.tagUpdateOnProvisionedProduct">tag_update_on_provisioned_product</a></code> | <code>str</code> | ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.description">description</a></code> | <code>str</code> | The description of the constraint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#portfolio_id ServicecatalogResourceUpdateConstraint#portfolio_id}

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#product_id ServicecatalogResourceUpdateConstraint#product_id}

---

##### `tag_update_on_provisioned_product`<sup>Required</sup> <a name="tag_update_on_provisioned_product" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.tagUpdateOnProvisionedProduct"></a>

```python
tag_update_on_provisioned_product: str
```

- *Type:* str

ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#tag_update_on_provisioned_product ServicecatalogResourceUpdateConstraint#tag_update_on_provisioned_product}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#accept_language ServicecatalogResourceUpdateConstraint#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_resource_update_constraint#description ServicecatalogResourceUpdateConstraint#description}

---



