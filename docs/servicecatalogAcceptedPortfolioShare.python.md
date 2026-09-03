# `servicecatalogAcceptedPortfolioShare` Submodule <a name="`servicecatalogAcceptedPortfolioShare` Submodule" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogAcceptedPortfolioShare <a name="ServicecatalogAcceptedPortfolioShare" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_accepted_portfolio_share awscc_servicecatalog_accepted_portfolio_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_accepted_portfolio_share

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare(
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
  accept_language: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.portfolioId"></a>

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_accepted_portfolio_share#portfolio_id ServicecatalogAcceptedPortfolioShare#portfolio_id}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_accepted_portfolio_share#accept_language ServicecatalogAcceptedPortfolioShare#accept_language}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicecatalogAcceptedPortfolioShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct"></a>

```python
from cdktn_provider_awscc import servicecatalog_accepted_portfolio_share

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicecatalog_accepted_portfolio_share

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicecatalog_accepted_portfolio_share

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicecatalog_accepted_portfolio_share

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicecatalogAcceptedPortfolioShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicecatalogAcceptedPortfolioShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicecatalogAcceptedPortfolioShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_accepted_portfolio_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogAcceptedPortfolioShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioIdInput">portfolio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioId">portfolio_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `portfolio_id_input`<sup>Optional</sup> <a name="portfolio_id_input" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioIdInput"></a>

```python
portfolio_id_input: str
```

- *Type:* str

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogAcceptedPortfolioShareConfig <a name="ServicecatalogAcceptedPortfolioShareConfig" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicecatalog_accepted_portfolio_share

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  portfolio_id: str,
  accept_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.portfolioId">portfolio_id</a></code> | <code>str</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | The language code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portfolio_id`<sup>Required</sup> <a name="portfolio_id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.portfolioId"></a>

```python
portfolio_id: str
```

- *Type:* str

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_accepted_portfolio_share#portfolio_id ServicecatalogAcceptedPortfolioShare#portfolio_id}

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_accepted_portfolio_share#accept_language ServicecatalogAcceptedPortfolioShare#accept_language}

---



