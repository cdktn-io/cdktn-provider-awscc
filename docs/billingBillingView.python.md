# `billingBillingView` Submodule <a name="`billingBillingView` Submodule" id="@cdktn/provider-awscc.billingBillingView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBillingView <a name="BillingBillingView" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view awscc_billing_billing_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingView(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source_views: typing.List[str],
  data_filter_expression: BillingBillingViewDataFilterExpression = None,
  description: str = None,
  tags: IResolvable | typing.List[BillingBillingViewTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#name BillingBillingView#name}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.sourceViews">source_views</a></code> | <code>typing.List[str]</code> | An array of strings that define the billing view's source. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.dataFilterExpression">data_filter_expression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#description BillingBillingView#description}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]</code> | An array of key-value pairs associated to the billing view being created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#name BillingBillingView#name}.

---

##### `source_views`<sup>Required</sup> <a name="source_views" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.sourceViews"></a>

- *Type:* typing.List[str]

An array of strings that define the billing view's source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#source_views BillingBillingView#source_views}

---

##### `data_filter_expression`<sup>Optional</sup> <a name="data_filter_expression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.dataFilterExpression"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#description BillingBillingView#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]

An array of key-value pairs associated to the billing view being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression">put_data_filter_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDataFilterExpression">reset_data_filter_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_filter_expression` <a name="put_data_filter_expression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression"></a>

```python
def put_data_filter_expression(
  dimensions: BillingBillingViewDataFilterExpressionDimensions = None,
  tags: BillingBillingViewDataFilterExpressionTags = None,
  time_range: BillingBillingViewDataFilterExpressionTimeRange = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression.parameter.dimensions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression.parameter.tags"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}.

---

###### `time_range`<sup>Optional</sup> <a name="time_range" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression.parameter.timeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BillingBillingViewTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]

---

##### `reset_data_filter_expression` <a name="reset_data_filter_expression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDataFilterExpression"></a>

```python
def reset_data_filter_expression() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BillingBillingView resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingView.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingView.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BillingBillingView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingBillingView to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingBillingView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingBillingView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.billingViewType">billing_view_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpression">data_filter_expression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference">BillingBillingViewDataFilterExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList">BillingBillingViewTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpressionInput">data_filter_expression_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViewsInput">source_views_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViews">source_views</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `billing_view_type`<sup>Required</sup> <a name="billing_view_type" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.billingViewType"></a>

```python
billing_view_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_filter_expression`<sup>Required</sup> <a name="data_filter_expression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpression"></a>

```python
data_filter_expression: BillingBillingViewDataFilterExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference">BillingBillingViewDataFilterExpressionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tags"></a>

```python
tags: BillingBillingViewTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList">BillingBillingViewTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_filter_expression_input`<sup>Optional</sup> <a name="data_filter_expression_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpressionInput"></a>

```python
data_filter_expression_input: IResolvable | BillingBillingViewDataFilterExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_views_input`<sup>Optional</sup> <a name="source_views_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViewsInput"></a>

```python
source_views_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BillingBillingViewTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_views`<sup>Required</sup> <a name="source_views" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViews"></a>

```python
source_views: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBillingViewConfig <a name="BillingBillingViewConfig" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source_views: typing.List[str],
  data_filter_expression: BillingBillingViewDataFilterExpression = None,
  description: str = None,
  tags: IResolvable | typing.List[BillingBillingViewTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#name BillingBillingView#name}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.sourceViews">source_views</a></code> | <code>typing.List[str]</code> | An array of strings that define the billing view's source. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dataFilterExpression">data_filter_expression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#description BillingBillingView#description}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]</code> | An array of key-value pairs associated to the billing view being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#name BillingBillingView#name}.

---

##### `source_views`<sup>Required</sup> <a name="source_views" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.sourceViews"></a>

```python
source_views: typing.List[str]
```

- *Type:* typing.List[str]

An array of strings that define the billing view's source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#source_views BillingBillingView#source_views}

---

##### `data_filter_expression`<sup>Optional</sup> <a name="data_filter_expression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dataFilterExpression"></a>

```python
data_filter_expression: BillingBillingViewDataFilterExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#description BillingBillingView#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BillingBillingViewTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]

An array of key-value pairs associated to the billing view being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}

---

### BillingBillingViewDataFilterExpression <a name="BillingBillingViewDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpression(
  dimensions: BillingBillingViewDataFilterExpressionDimensions = None,
  tags: BillingBillingViewDataFilterExpressionTags = None,
  time_range: BillingBillingViewDataFilterExpressionTimeRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.timeRange">time_range</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.dimensions"></a>

```python
dimensions: BillingBillingViewDataFilterExpressionDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.tags"></a>

```python
tags: BillingBillingViewDataFilterExpressionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}.

---

##### `time_range`<sup>Optional</sup> <a name="time_range" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.timeRange"></a>

```python
time_range: BillingBillingViewDataFilterExpressionTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}.

---

### BillingBillingViewDataFilterExpressionDimensions <a name="BillingBillingViewDataFilterExpressionDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionDimensions(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#values BillingBillingView#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

### BillingBillingViewDataFilterExpressionTags <a name="BillingBillingViewDataFilterExpressionTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionTags(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#values BillingBillingView#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

### BillingBillingViewDataFilterExpressionTimeRange <a name="BillingBillingViewDataFilterExpressionTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionTimeRange(
  begin_date_inclusive: str = None,
  end_date_inclusive: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.beginDateInclusive">begin_date_inclusive</a></code> | <code>str</code> | The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.endDateInclusive">end_date_inclusive</a></code> | <code>str</code> | The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ). |

---

##### `begin_date_inclusive`<sup>Optional</sup> <a name="begin_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.beginDateInclusive"></a>

```python
begin_date_inclusive: str
```

- *Type:* str

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#begin_date_inclusive BillingBillingView#begin_date_inclusive}

---

##### `end_date_inclusive`<sup>Optional</sup> <a name="end_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.endDateInclusive"></a>

```python
end_date_inclusive: str
```

- *Type:* str

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#end_date_inclusive BillingBillingView#end_date_inclusive}

---

### BillingBillingViewTags <a name="BillingBillingViewTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#value BillingBillingView#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBillingViewDataFilterExpressionDimensionsOutputReference <a name="BillingBillingViewDataFilterExpressionDimensionsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingBillingViewDataFilterExpressionDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

---


### BillingBillingViewDataFilterExpressionOutputReference <a name="BillingBillingViewDataFilterExpressionOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange">put_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTimeRange">reset_time_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions"></a>

```python
def put_dimensions(
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

##### `put_time_range` <a name="put_time_range" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange"></a>

```python
def put_time_range(
  begin_date_inclusive: str = None,
  end_date_inclusive: str = None
) -> None
```

###### `begin_date_inclusive`<sup>Optional</sup> <a name="begin_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange.parameter.beginDateInclusive"></a>

- *Type:* str

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#begin_date_inclusive BillingBillingView#begin_date_inclusive}

---

###### `end_date_inclusive`<sup>Optional</sup> <a name="end_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange.parameter.endDateInclusive"></a>

- *Type:* str

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billing_billing_view#end_date_inclusive BillingBillingView#end_date_inclusive}

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_time_range` <a name="reset_time_range" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTimeRange"></a>

```python
def reset_time_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference">BillingBillingViewDataFilterExpressionDimensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference">BillingBillingViewDataFilterExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRange">time_range</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference">BillingBillingViewDataFilterExpressionTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRangeInput">time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensions"></a>

```python
dimensions: BillingBillingViewDataFilterExpressionDimensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference">BillingBillingViewDataFilterExpressionDimensionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tags"></a>

```python
tags: BillingBillingViewDataFilterExpressionTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference">BillingBillingViewDataFilterExpressionTagsOutputReference</a>

---

##### `time_range`<sup>Required</sup> <a name="time_range" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRange"></a>

```python
time_range: BillingBillingViewDataFilterExpressionTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference">BillingBillingViewDataFilterExpressionTimeRangeOutputReference</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | BillingBillingViewDataFilterExpressionDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | BillingBillingViewDataFilterExpressionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

---

##### `time_range_input`<sup>Optional</sup> <a name="time_range_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRangeInput"></a>

```python
time_range_input: IResolvable | BillingBillingViewDataFilterExpressionTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingBillingViewDataFilterExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

---


### BillingBillingViewDataFilterExpressionTagsOutputReference <a name="BillingBillingViewDataFilterExpressionTagsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingBillingViewDataFilterExpressionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

---


### BillingBillingViewDataFilterExpressionTimeRangeOutputReference <a name="BillingBillingViewDataFilterExpressionTimeRangeOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetBeginDateInclusive">reset_begin_date_inclusive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetEndDateInclusive">reset_end_date_inclusive</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_begin_date_inclusive` <a name="reset_begin_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetBeginDateInclusive"></a>

```python
def reset_begin_date_inclusive() -> None
```

##### `reset_end_date_inclusive` <a name="reset_end_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetEndDateInclusive"></a>

```python
def reset_end_date_inclusive() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput">begin_date_inclusive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput">end_date_inclusive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive">begin_date_inclusive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive">end_date_inclusive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `begin_date_inclusive_input`<sup>Optional</sup> <a name="begin_date_inclusive_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput"></a>

```python
begin_date_inclusive_input: str
```

- *Type:* str

---

##### `end_date_inclusive_input`<sup>Optional</sup> <a name="end_date_inclusive_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput"></a>

```python
end_date_inclusive_input: str
```

- *Type:* str

---

##### `begin_date_inclusive`<sup>Required</sup> <a name="begin_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive"></a>

```python
begin_date_inclusive: str
```

- *Type:* str

---

##### `end_date_inclusive`<sup>Required</sup> <a name="end_date_inclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive"></a>

```python
end_date_inclusive: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingBillingViewDataFilterExpressionTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

---


### BillingBillingViewTagsList <a name="BillingBillingViewTagsList" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingBillingViewTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BillingBillingViewTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>]

---


### BillingBillingViewTagsOutputReference <a name="BillingBillingViewTagsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billing_billing_view

billingBillingView.BillingBillingViewTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingBillingViewTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>

---



