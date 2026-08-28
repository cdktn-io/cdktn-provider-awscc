# `dataAwsccBedrockagentcoreEvaluator` Submodule <a name="`dataAwsccBedrockagentcoreEvaluator` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreEvaluator <a name="DataAwsccBedrockagentcoreEvaluator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_evaluator awscc_bedrockagentcore_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_evaluator#id DataAwsccBedrockagentcoreEvaluator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcoreEvaluator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcoreEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorArn">evaluator_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorConfig">evaluator_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorId">evaluator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorName">evaluator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList">DataAwsccBedrockagentcoreEvaluatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `evaluator_arn`<sup>Required</sup> <a name="evaluator_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorArn"></a>

```python
evaluator_arn: str
```

- *Type:* str

---

##### `evaluator_config`<sup>Required</sup> <a name="evaluator_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorConfig"></a>

```python
evaluator_config: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference</a>

---

##### `evaluator_id`<sup>Required</sup> <a name="evaluator_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorId"></a>

```python
evaluator_id: str
```

- *Type:* str

---

##### `evaluator_name`<sup>Required</sup> <a name="evaluator_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorName"></a>

```python
evaluator_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tags"></a>

```python
tags: DataAwsccBedrockagentcoreEvaluatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList">DataAwsccBedrockagentcoreEvaluatorTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreEvaluatorConfig <a name="DataAwsccBedrockagentcoreEvaluatorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_evaluator#id DataAwsccBedrockagentcoreEvaluator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical()
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical()
```


### DataAwsccBedrockagentcoreEvaluatorTags <a name="DataAwsccBedrockagentcoreEvaluatorTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds">lambda_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_timeout_in_seconds`<sup>Required</sup> <a name="lambda_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds"></a>

```python
lambda_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig"></a>

```python
lambda_config: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig">inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_model_request_fields`<sup>Required</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

---

##### `inference_config`<sup>Required</sup> <a name="inference_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig"></a>

```python
inference_config: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference</a>

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig">bedrock_evaluator_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.responsesEvaluatorModelConfig">responses_evaluator_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bedrock_evaluator_model_config`<sup>Required</sup> <a name="bedrock_evaluator_model_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig"></a>

```python
bedrock_evaluator_model_config: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference</a>

---

##### `responses_evaluator_model_config`<sup>Required</sup> <a name="responses_evaluator_model_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.responsesEvaluatorModelConfig"></a>

```python
responses_evaluator_model_config: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.maxOutputTokens">max_output_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.reasoning">reasoning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_output_tokens`<sup>Required</sup> <a name="max_output_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.maxOutputTokens"></a>

```python
max_output_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `reasoning`<sup>Required</sup> <a name="reasoning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.reasoning"></a>

```python
reasoning: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference</a>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.effort">effort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effort`<sup>Required</sup> <a name="effort" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.effort"></a>

```python
effort: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig">model_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale">rating_scale</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `model_config`<sup>Required</sup> <a name="model_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig"></a>

```python
model_config: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference</a>

---

##### `rating_scale`<sup>Required</sup> <a name="rating_scale" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale"></a>

```python
rating_scale: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical">categorical</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical">numerical</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categorical`<sup>Required</sup> <a name="categorical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical"></a>

```python
categorical: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a>

---

##### `numerical`<sup>Required</sup> <a name="numerical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical"></a>

```python
numerical: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased">code_based</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge">llm_as_a_judge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_based`<sup>Required</sup> <a name="code_based" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased"></a>

```python
code_based: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference</a>

---

##### `llm_as_a_judge`<sup>Required</sup> <a name="llm_as_a_judge" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge"></a>

```python
llm_as_a_judge: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorTagsList <a name="DataAwsccBedrockagentcoreEvaluatorTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreEvaluatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreEvaluatorTagsOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_evaluator

dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags">DataAwsccBedrockagentcoreEvaluatorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreEvaluatorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags">DataAwsccBedrockagentcoreEvaluatorTags</a>

---



