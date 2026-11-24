# `apiportalProductDisplayOrder` Submodule <a name="`apiportalProductDisplayOrder` Submodule" id="@cdktn/provider-awscc.apiportalProductDisplayOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductDisplayOrder <a name="ApiportalProductDisplayOrder" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order awscc_apiportal_product_display_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrder(
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
  contents: IResolvable | typing.List[ApiportalProductDisplayOrderContents] = None,
  overview_page_arn: str = None,
  product_page_arns: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | The identifier of the parent Product. Singleton key for this CFN type. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.contents">contents</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]</code> | Sectioned arrangement of ProductApiPage ARNs. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.overviewPageArn">overview_page_arn</a></code> | <code>str</code> | ARN of the ProductPage rendered as the overview/landing page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productPageArns">product_page_arns</a></code> | <code>typing.List[str]</code> | Top-level ProductPage ARNs in display order. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productId"></a>

- *Type:* str

The identifier of the parent Product. Singleton key for this CFN type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_id ApiportalProductDisplayOrder#product_id}

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.contents"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]

Sectioned arrangement of ProductApiPage ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#contents ApiportalProductDisplayOrder#contents}

---

##### `overview_page_arn`<sup>Optional</sup> <a name="overview_page_arn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.overviewPageArn"></a>

- *Type:* str

ARN of the ProductPage rendered as the overview/landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#overview_page_arn ApiportalProductDisplayOrder#overview_page_arn}

---

##### `product_page_arns`<sup>Optional</sup> <a name="product_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.productPageArns"></a>

- *Type:* typing.List[str]

Top-level ProductPage ARNs in display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_page_arns ApiportalProductDisplayOrder#product_page_arns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents">put_contents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetContents">reset_contents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverviewPageArn">reset_overview_page_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetProductPageArns">reset_product_page_arns</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contents` <a name="put_contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents"></a>

```python
def put_contents(
  value: IResolvable | typing.List[ApiportalProductDisplayOrderContents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]

---

##### `reset_contents` <a name="reset_contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetContents"></a>

```python
def reset_contents() -> None
```

##### `reset_overview_page_arn` <a name="reset_overview_page_arn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverviewPageArn"></a>

```python
def reset_overview_page_arn() -> None
```

##### `reset_product_page_arns` <a name="reset_product_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetProductPageArns"></a>

```python
def reset_product_page_arns() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiportalProductDisplayOrder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiportalProductDisplayOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductDisplayOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList">ApiportalProductDisplayOrderContentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contentsInput">contents_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArnInput">overview_page_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArnsInput">product_page_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArn">overview_page_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArns">product_page_arns</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contents"></a>

```python
contents: ApiportalProductDisplayOrderContentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList">ApiportalProductDisplayOrderContentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contentsInput"></a>

```python
contents_input: IResolvable | typing.List[ApiportalProductDisplayOrderContents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]

---

##### `overview_page_arn_input`<sup>Optional</sup> <a name="overview_page_arn_input" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArnInput"></a>

```python
overview_page_arn_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `product_page_arns_input`<sup>Optional</sup> <a name="product_page_arns_input" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArnsInput"></a>

```python
product_page_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `overview_page_arn`<sup>Required</sup> <a name="overview_page_arn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArn"></a>

```python
overview_page_arn: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `product_page_arns`<sup>Required</sup> <a name="product_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArns"></a>

```python
product_page_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductDisplayOrderConfig <a name="ApiportalProductDisplayOrderConfig" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  product_id: str,
  contents: IResolvable | typing.List[ApiportalProductDisplayOrderContents] = None,
  overview_page_arn: str = None,
  product_page_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productId">product_id</a></code> | <code>str</code> | The identifier of the parent Product. Singleton key for this CFN type. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.contents">contents</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]</code> | Sectioned arrangement of ProductApiPage ARNs. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.overviewPageArn">overview_page_arn</a></code> | <code>str</code> | ARN of the ProductPage rendered as the overview/landing page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productPageArns">product_page_arns</a></code> | <code>typing.List[str]</code> | Top-level ProductPage ARNs in display order. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

The identifier of the parent Product. Singleton key for this CFN type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_id ApiportalProductDisplayOrder#product_id}

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.contents"></a>

```python
contents: IResolvable | typing.List[ApiportalProductDisplayOrderContents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]

Sectioned arrangement of ProductApiPage ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#contents ApiportalProductDisplayOrder#contents}

---

##### `overview_page_arn`<sup>Optional</sup> <a name="overview_page_arn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.overviewPageArn"></a>

```python
overview_page_arn: str
```

- *Type:* str

ARN of the ProductPage rendered as the overview/landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#overview_page_arn ApiportalProductDisplayOrder#overview_page_arn}

---

##### `product_page_arns`<sup>Optional</sup> <a name="product_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productPageArns"></a>

```python
product_page_arns: typing.List[str]
```

- *Type:* typing.List[str]

Top-level ProductPage ARNs in display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_page_arns ApiportalProductDisplayOrder#product_page_arns}

---

### ApiportalProductDisplayOrderContents <a name="ApiportalProductDisplayOrderContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents(
  product_api_page_arns: typing.List[str] = None,
  section_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.productApiPageArns">product_api_page_arns</a></code> | <code>typing.List[str]</code> | Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.sectionName">section_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}. |

---

##### `product_api_page_arns`<sup>Optional</sup> <a name="product_api_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.productApiPageArns"></a>

```python
product_api_page_arns: typing.List[str]
```

- *Type:* typing.List[str]

Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_api_page_arns ApiportalProductDisplayOrder#product_api_page_arns}

---

##### `section_name`<sup>Optional</sup> <a name="section_name" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.sectionName"></a>

```python
section_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductDisplayOrderContentsList <a name="ApiportalProductDisplayOrderContentsList" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiportalProductDisplayOrderContentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApiportalProductDisplayOrderContents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>]

---


### ApiportalProductDisplayOrderContentsOutputReference <a name="ApiportalProductDisplayOrderContentsOutputReference" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_product_display_order

apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetProductApiPageArns">reset_product_api_page_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetSectionName">reset_section_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_product_api_page_arns` <a name="reset_product_api_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetProductApiPageArns"></a>

```python
def reset_product_api_page_arns() -> None
```

##### `reset_section_name` <a name="reset_section_name" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetSectionName"></a>

```python
def reset_section_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArnsInput">product_api_page_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionNameInput">section_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArns">product_api_page_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionName">section_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_api_page_arns_input`<sup>Optional</sup> <a name="product_api_page_arns_input" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArnsInput"></a>

```python
product_api_page_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `section_name_input`<sup>Optional</sup> <a name="section_name_input" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionNameInput"></a>

```python
section_name_input: str
```

- *Type:* str

---

##### `product_api_page_arns`<sup>Required</sup> <a name="product_api_page_arns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArns"></a>

```python
product_api_page_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `section_name`<sup>Required</sup> <a name="section_name" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionName"></a>

```python
section_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalProductDisplayOrderContents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>

---



