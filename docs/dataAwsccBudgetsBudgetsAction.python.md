# `dataAwsccBudgetsBudgetsAction` Submodule <a name="`dataAwsccBudgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBudgetsBudgetsAction <a name="DataAwsccBudgetsBudgetsAction" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action#id DataAwsccBudgetsBudgetsAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBudgetsBudgetsAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference">DataAwsccBudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.approvalModel">approval_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.budgetName">budget_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList">DataAwsccBudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.subscribers">subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList">DataAwsccBudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionThreshold"></a>

```python
action_threshold: DataAwsccBudgetsBudgetsActionActionThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference">DataAwsccBudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `approval_model`<sup>Required</sup> <a name="approval_model" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.approvalModel"></a>

```python
approval_model: str
```

- *Type:* str

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.definition"></a>

```python
definition: DataAwsccBudgetsBudgetsActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.resourceTags"></a>

```python
resource_tags: DataAwsccBudgetsBudgetsActionResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList">DataAwsccBudgetsBudgetsActionResourceTagsList</a>

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.subscribers"></a>

```python
subscribers: DataAwsccBudgetsBudgetsActionSubscribersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList">DataAwsccBudgetsBudgetsActionSubscribersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBudgetsBudgetsActionActionThreshold <a name="DataAwsccBudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold()
```


### DataAwsccBudgetsBudgetsActionConfig <a name="DataAwsccBudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action#id DataAwsccBudgetsBudgetsAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBudgetsBudgetsActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition()
```


### DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition()
```


### DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition()
```


### DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition()
```


### DataAwsccBudgetsBudgetsActionResourceTags <a name="DataAwsccBudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags()
```


### DataAwsccBudgetsBudgetsActionSubscribers <a name="DataAwsccBudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBudgetsBudgetsActionActionThresholdOutputReference <a name="DataAwsccBudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold">DataAwsccBudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionActionThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold">DataAwsccBudgetsBudgetsActionActionThreshold</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">iam_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">scp_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">ssm_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition">DataAwsccBudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_action_definition`<sup>Required</sup> <a name="iam_action_definition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```python
iam_action_definition: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scp_action_definition`<sup>Required</sup> <a name="scp_action_definition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```python
scp_action_definition: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssm_action_definition`<sup>Required</sup> <a name="ssm_action_definition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```python
ssm_action_definition: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition">DataAwsccBudgetsBudgetsActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_ids`<sup>Required</sup> <a name="instance_ids" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```python
instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionResourceTagsList <a name="DataAwsccBudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBudgetsBudgetsActionResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBudgetsBudgetsActionResourceTagsOutputReference <a name="DataAwsccBudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags">DataAwsccBudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags">DataAwsccBudgetsBudgetsActionResourceTags</a>

---


### DataAwsccBudgetsBudgetsActionSubscribersList <a name="DataAwsccBudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBudgetsBudgetsActionSubscribersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBudgetsBudgetsActionSubscribersOutputReference <a name="DataAwsccBudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_budgets_budgets_action

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers">DataAwsccBudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBudgetsBudgetsActionSubscribers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers">DataAwsccBudgetsBudgetsActionSubscribers</a>

---



