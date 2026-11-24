# `apiportalProductApiPage` Submodule <a name="`apiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.apiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductApiPage <a name="ApiportalProductApiPage" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  product_id: str,
  display_content: ApiportalProductApiPageDisplayContent = None,
  managed_api_id: str = None,
  tags: IResolvable | typing.List[ApiportalProductApiPageTags] = None,
  try_it_state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | The identifier of the parent Product. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.displayContent">display_content</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.managedApiId">managed_api_id</a></code> | <code>str</code> | Identifier of the Managed API this page documents. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]</code> | The tags associated with the product API page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tryItState">try_it_state</a></code> | <code>str</code> | Whether the interactive TryIt UI is enabled for this API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.productId"></a>

- *Type:* str

The identifier of the parent Product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}

---

##### `display_content`<sup>Optional</sup> <a name="display_content" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.displayContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}

---

##### `managed_api_id`<sup>Optional</sup> <a name="managed_api_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.managedApiId"></a>

- *Type:* str

Identifier of the Managed API this page documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]

The tags associated with the product API page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}

---

##### `try_it_state`<sup>Optional</sup> <a name="try_it_state" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.tryItState"></a>

- *Type:* str

Whether the interactive TryIt UI is enabled for this API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent">put_display_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent">reset_display_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId">reset_managed_api_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState">reset_try_it_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_display_content` <a name="put_display_content" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent"></a>

```python
def put_display_content(
  none: str = None,
  overrides: ApiportalProductApiPageDisplayContentOverrides = None
) -> None
```

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent.parameter.none"></a>

- *Type:* str

Marker selecting the default service-rendered content with no overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#none ApiportalProductApiPage#none}

---

###### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent.parameter.overrides"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

Customer-supplied overrides for the service-rendered API documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#overrides ApiportalProductApiPage#overrides}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApiportalProductApiPageTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]

---

##### `reset_display_content` <a name="reset_display_content" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent"></a>

```python
def reset_display_content() -> None
```

##### `reset_managed_api_id` <a name="reset_managed_api_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId"></a>

```python
def reset_managed_api_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_try_it_state` <a name="reset_try_it_state" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState"></a>

```python
def reset_try_it_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiportalProductApiPage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId">api_id</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent">display_content</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn">product_api_page_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId">product_api_page_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException">status_exception</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput">display_content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput">managed_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput">try_it_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId">managed_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState">try_it_state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId"></a>

```python
api_id: ApiportalProductApiPageApiIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a>

---

##### `display_content`<sup>Required</sup> <a name="display_content" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent"></a>

```python
display_content: ApiportalProductApiPageDisplayContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `product_api_page_arn`<sup>Required</sup> <a name="product_api_page_arn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn"></a>

```python
product_api_page_arn: str
```

- *Type:* str

---

##### `product_api_page_id`<sup>Required</sup> <a name="product_api_page_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId"></a>

```python
product_api_page_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_exception`<sup>Required</sup> <a name="status_exception" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException"></a>

```python
status_exception: ApiportalProductApiPageStatusExceptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags"></a>

```python
tags: ApiportalProductApiPageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `display_content_input`<sup>Optional</sup> <a name="display_content_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput"></a>

```python
display_content_input: IResolvable | ApiportalProductApiPageDisplayContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---

##### `managed_api_id_input`<sup>Optional</sup> <a name="managed_api_id_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput"></a>

```python
managed_api_id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApiportalProductApiPageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]

---

##### `try_it_state_input`<sup>Optional</sup> <a name="try_it_state_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput"></a>

```python
try_it_state_input: str
```

- *Type:* str

---

##### `managed_api_id`<sup>Required</sup> <a name="managed_api_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId"></a>

```python
managed_api_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `try_it_state`<sup>Required</sup> <a name="try_it_state" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState"></a>

```python
try_it_state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductApiPageApiId <a name="ApiportalProductApiPageApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageApiId()
```


### ApiportalProductApiPageApiIdIdentifierParts <a name="ApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts()
```


### ApiportalProductApiPageConfig <a name="ApiportalProductApiPageConfig" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  product_id: str,
  display_content: ApiportalProductApiPageDisplayContent = None,
  managed_api_id: str = None,
  tags: IResolvable | typing.List[ApiportalProductApiPageTags] = None,
  try_it_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId">product_id</a></code> | <code>str</code> | The identifier of the parent Product. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent">display_content</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId">managed_api_id</a></code> | <code>str</code> | Identifier of the Managed API this page documents. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]</code> | The tags associated with the product API page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState">try_it_state</a></code> | <code>str</code> | Whether the interactive TryIt UI is enabled for this API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

The identifier of the parent Product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}

---

##### `display_content`<sup>Optional</sup> <a name="display_content" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent"></a>

```python
display_content: ApiportalProductApiPageDisplayContent
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}

---

##### `managed_api_id`<sup>Optional</sup> <a name="managed_api_id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId"></a>

```python
managed_api_id: str
```

- *Type:* str

Identifier of the Managed API this page documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApiportalProductApiPageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]

The tags associated with the product API page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}

---

##### `try_it_state`<sup>Optional</sup> <a name="try_it_state" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState"></a>

```python
try_it_state: str
```

- *Type:* str

Whether the interactive TryIt UI is enabled for this API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}

---

### ApiportalProductApiPageDisplayContent <a name="ApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageDisplayContent(
  none: str = None,
  overrides: ApiportalProductApiPageDisplayContentOverrides = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none">none</a></code> | <code>str</code> | Marker selecting the default service-rendered content with no overrides. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | Customer-supplied overrides for the service-rendered API documentation. |

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none"></a>

```python
none: str
```

- *Type:* str

Marker selecting the default service-rendered content with no overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#none ApiportalProductApiPage#none}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides"></a>

```python
overrides: ApiportalProductApiPageDisplayContentOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

Customer-supplied overrides for the service-rendered API documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#overrides ApiportalProductApiPage#overrides}

---

### ApiportalProductApiPageDisplayContentOverrides <a name="ApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides(
  api_url: str = None,
  body: str = None,
  operation_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl">api_url</a></code> | <code>str</code> | Override for the API URL. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body">body</a></code> | <code>str</code> | Override for the documentation body. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName">operation_name</a></code> | <code>str</code> | Override for the operation name. |

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

Override for the API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#api_url ApiportalProductApiPage#api_url}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body"></a>

```python
body: str
```

- *Type:* str

Override for the documentation body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#body ApiportalProductApiPage#body}

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

Override for the operation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#operation_name ApiportalProductApiPage#operation_name}

---

### ApiportalProductApiPageStatusException <a name="ApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageStatusException()
```


### ApiportalProductApiPageTags <a name="ApiportalProductApiPageTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="ApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```python
internal_value: ApiportalProductApiPageApiIdIdentifierParts
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a>

---


### ApiportalProductApiPageApiIdOutputReference <a name="ApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts">identifier_parts</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_parts`<sup>Required</sup> <a name="identifier_parts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```python
identifier_parts: ApiportalProductApiPageApiIdIdentifierPartsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```python
internal_value: ApiportalProductApiPageApiId
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a>

---


### ApiportalProductApiPageDisplayContentOutputReference <a name="ApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone">reset_none</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overrides` <a name="put_overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides"></a>

```python
def put_overrides(
  api_url: str = None,
  body: str = None,
  operation_name: str = None
) -> None
```

###### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides.parameter.apiUrl"></a>

- *Type:* str

Override for the API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#api_url ApiportalProductApiPage#api_url}

---

###### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides.parameter.body"></a>

- *Type:* str

Override for the documentation body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#body ApiportalProductApiPage#body}

---

###### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides.parameter.operationName"></a>

- *Type:* str

Override for the operation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#operation_name ApiportalProductApiPage#operation_name}

---

##### `reset_none` <a name="reset_none" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone"></a>

```python
def reset_none() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput">none_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput">overrides_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```python
overrides: ApiportalProductApiPageDisplayContentOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput"></a>

```python
none_input: str
```

- *Type:* str

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput"></a>

```python
overrides_input: IResolvable | ApiportalProductApiPageDisplayContentOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalProductApiPageDisplayContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---


### ApiportalProductApiPageDisplayContentOverridesOutputReference <a name="ApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl">reset_api_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName">reset_operation_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_url` <a name="reset_api_url" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl"></a>

```python
def reset_api_url() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_operation_name` <a name="reset_operation_name" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName"></a>

```python
def reset_operation_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput">operation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `operation_name_input`<sup>Optional</sup> <a name="operation_name_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput"></a>

```python
operation_name_input: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalProductApiPageDisplayContentOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---


### ApiportalProductApiPageStatusExceptionOutputReference <a name="ApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception">exception</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```python
exception: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```python
internal_value: ApiportalProductApiPageStatusException
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a>

---


### ApiportalProductApiPageTagsList <a name="ApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiportalProductApiPageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApiportalProductApiPageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>]

---


### ApiportalProductApiPageTagsOutputReference <a name="ApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_api_page

apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalProductApiPageTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags">ApiportalProductApiPageTags</a>

---



