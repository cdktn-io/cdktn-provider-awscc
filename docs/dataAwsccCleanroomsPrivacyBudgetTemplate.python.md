# `dataAwsccCleanroomsPrivacyBudgetTemplate` Submodule <a name="`dataAwsccCleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplate <a name="DataAwsccCleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template#id DataAwsccCleanroomsPrivacyBudgetTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsPrivacyBudgetTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference">DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">privacy_budget_template_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">privacy_budget_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList">DataAwsccCleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```python
parameters: DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference">DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `privacy_budget_template_identifier`<sup>Required</sup> <a name="privacy_budget_template_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```python
privacy_budget_template_identifier: str
```

- *Type:* str

---

##### `privacy_budget_type`<sup>Required</sup> <a name="privacy_budget_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```python
privacy_budget_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tags"></a>

```python
tags: DataAwsccCleanroomsPrivacyBudgetTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList">DataAwsccCleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplateConfig <a name="DataAwsccCleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template#id DataAwsccCleanroomsPrivacyBudgetTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsPrivacyBudgetTemplateParameters <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters()
```


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters()
```


### DataAwsccCleanroomsPrivacyBudgetTemplateTags <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">budget</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `budget`<sup>Required</sup> <a name="budget" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```python
budget: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">budget_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">epsilon</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">users_noise_per_query</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `budget_parameters`<sup>Required</sup> <a name="budget_parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```python
budget_parameters: DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```python
epsilon: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `users_noise_per_query`<sup>Required</sup> <a name="users_noise_per_query" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```python
users_noise_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsPrivacyBudgetTemplateParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParameters</a>

---


### DataAwsccCleanroomsPrivacyBudgetTemplateTagsList <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_privacy_budget_template

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags">DataAwsccCleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsPrivacyBudgetTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags">DataAwsccCleanroomsPrivacyBudgetTemplateTags</a>

---



