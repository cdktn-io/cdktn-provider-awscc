# `servicecatalogPortfolio` Submodule <a name="`servicecatalogPortfolio` Submodule" id="@cdktn/provider-awscc.servicecatalogPortfolio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolio <a name="ServicecatalogPortfolio" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio awscc_servicecatalog_portfolio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  provider_name: str,
  accept_language: str = None,
  description: str = None,
  tags: IResolvable | typing.List[ServicecatalogPortfolioTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#display_name ServicecatalogPortfolio#display_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#accept_language ServicecatalogPortfolio#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#display_name ServicecatalogPortfolio#display_name}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#accept_language ServicecatalogPortfolio#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ServicecatalogPortfolioTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogPortfolio resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolio.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogPortfolio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogPortfolio to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogPortfolio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogPortfolio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioName">portfolio_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList">ServicecatalogPortfolioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

##### `portfolio_name`<sup>Required</sup> <a name="portfolio_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioName"></a>

```python
portfolio_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tags"></a>

```python
tags: ServicecatalogPortfolioTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList">ServicecatalogPortfolioTagsList</a>

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ServicecatalogPortfolioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioConfig <a name="ServicecatalogPortfolioConfig" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  provider_name: str,
  accept_language: str = None,
  description: str = None,
  tags: IResolvable | typing.List[ServicecatalogPortfolioTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#display_name ServicecatalogPortfolio#display_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#accept_language ServicecatalogPortfolio#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#display_name ServicecatalogPortfolio#display_name}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#accept_language ServicecatalogPortfolio#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ServicecatalogPortfolioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}.

---

### ServicecatalogPortfolioTags <a name="ServicecatalogPortfolioTags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#key ServicecatalogPortfolio#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#value ServicecatalogPortfolio#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#key ServicecatalogPortfolio#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#value ServicecatalogPortfolio#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogPortfolioTagsList <a name="ServicecatalogPortfolioTagsList" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicecatalogPortfolioTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicecatalogPortfolioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>]

---


### ServicecatalogPortfolioTagsOutputReference <a name="ServicecatalogPortfolioTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_portfolio

servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicecatalogPortfolioTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>

---



